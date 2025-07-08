
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  SectionList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";

const CATEGORIES = {
  Ficción: "subject:fiction",
  Historia: "subject:history",
  Tecnología: "subject:technology",
  Programación: "subject:programming",
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Ficción");
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Para el modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async (category) => {
  setLoading(true);
  setErrorMsg("");
  setSections([]);

  try {
    const query = CATEGORIES[category];
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      setErrorMsg("No se encontraron libros para esta categoría.");
      return;
    }

    const grouped = {};
    data.items.forEach((item) => {
      const info = item.volumeInfo;
      const author = info.authors?.[0] || "Autor desconocido";

      const book = {
        id: item.id,
        title: info.title,
        thumbnail: info.imageLinks?.thumbnail,
        description: info.description || "Sin descripción disponible.",
        publisher: info.publisher,
        publishedDate: info.publishedDate,
        pageCount: info.pageCount,
      };

      if (!grouped[author]) grouped[author] = [];
      grouped[author].push(book);
    });

    // Mostrar autores con al menos 1 libro
    const rawSections = Object.keys(grouped)
      .filter((author) => grouped[author].length >= 2) // Quitar filtro para mostrar todos los autores
      .map((author) => ({
        title: author,
        data: grouped[author].slice(0, 3),
      }));

    if (rawSections.length === 0) {
      setErrorMsg("No se encontraron libros para esta categoría.");
    } else {
      setSections(rawSections);
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    setErrorMsg("Error al conectar con la API.");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchBooks(selectedCategory);
  }, [selectedCategory]);

  // Al seleccionar libro: abrir modal con detalles
  const onSelectBook = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bookContainer} onPress={() => onSelectBook(item)}>
      {item.thumbnail && (
        <Image source={{ uri: item.thumbnail }} style={styles.bookImage} />
      )}
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        {item.publisher && (
          <Text style={styles.bookPublisher}>Editorial: {item.publisher}</Text>
        )}
        {item.description && (
          <Text style={styles.bookDescription}>
            {item.description.substring(0, 100)}...
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={styles.categoryContainer}>
        {Object.keys(CATEGORIES).map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categorySelected,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#ff6600" style={{ marginTop: 30 }} />
      ) : errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={{ paddingBottom: 30 }}
          stickySectionHeadersEnabled
        />
      )}

      {/* Modal para descripción del libro */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              {selectedBook && (
                <>
                  <Text style={styles.modalTitle}>{selectedBook.title}</Text>
                  {selectedBook.thumbnail && (
                    <Image
                      source={{ uri: selectedBook.thumbnail }}
                      style={styles.modalImage}
                    />
                  )}
                  <Text style={styles.modalText}>
                    <Text style={{ fontWeight: "bold" }}>Editorial: </Text>
                    {selectedBook.publisher || "Desconocida"}
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={{ fontWeight: "bold" }}>Páginas: </Text>
                    {selectedBook.pageCount || "N/A"}
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={{ fontWeight: "bold" }}>Publicado: </Text>
                    {selectedBook.publishedDate || "N/A"}
                  </Text>
                  <Text style={[styles.modalText, { marginTop: 10 }]}>
                    {selectedBook.description}
                  </Text>
                </>
              )}
            </ScrollView>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  categorySelected: {
    backgroundColor: "#ff6600",
  },
  categoryText: {
    fontWeight: "600",
    color: "#333",
  },
  categoryTextSelected: {
    color: "#fff",
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  bookContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  bookImage: {
    width: 60,
    height: 90,
    marginRight: 10,
    borderRadius: 5,
  },
  bookInfo: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#222",
  },
  bookPublisher: {
    fontSize: 13,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 4,
  },
  bookDescription: {
    fontSize: 13,
    color: "#444",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalImage: {
    width: 120,
    height: 180,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 5,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#ff6600",
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

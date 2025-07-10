import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Share,
} from 'react-native';
import {
  Title,
  IconButton,
  Text,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // ← подключим позже

type Note = {
  id: string;
  text: string;
  color: string;
};

export default function NotesListScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />

      <Title style={styles.title}>Сохранённые заметки</Title>

      {/* Пока просто заглушка */}
      {notes.length === 0 ? (
        <Text style={styles.emptyText}>Нет заметок</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.note, { backgroundColor: item.color }]}>
              <Text>{item.text}</Text>
              {/* Здесь позже будут кнопки редактирования, удаления и "поделиться" */}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptyText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  note: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});

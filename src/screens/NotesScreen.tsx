import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { Title, Button } from 'react-native-paper';

export default function NotesScreen() {
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!note.trim()) {
      Alert.alert('Пустая заметка', 'Введите текст перед сохранением.');
      return;
    }

    console.log('Сохранённая заметка:', note);
    Alert.alert('Сохранено', 'Заметка успешно сохранена!');
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Заметки</Title>

      <TextInput
        placeholder="Напиши здесь свою заметку..."
        value={note}
        onChangeText={setNote}
        multiline
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Сохранить
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    padding: 16,
    fontSize: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
  },
  button: {
    marginTop: 16,
    borderRadius: 24,
  },
});

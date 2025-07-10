import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать 👋</Text>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('Notes')}
      >
        Новая заметка
      </Button>

      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate('NotesList')}
      >
        Список заметок
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 24,
  },
});

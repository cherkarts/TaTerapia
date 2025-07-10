// src/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import NotesListScreen from '../screens/NotesListScreen';












const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notes" component={NotesScreen} />
          <Stack.Screen name="NotesList" component={NotesListScreen} options={{ title: 'Мои заметки' }} />

        {/* В будущем добавим MainScreen, Profile и т.д. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

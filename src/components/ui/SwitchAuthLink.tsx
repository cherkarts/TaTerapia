import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  isLogin: boolean;
  onToggle: () => void;
};

export default function SwitchAuthLink({ isLogin, onToggle }: Props) {
  return (
    <Text onPress={onToggle} style={styles.link}>
      {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
    </Text>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#6A5ACD',
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';   // ← осталось только Title
import InputField from './ui/InputField';
import PrimaryButton from './ui/PrimaryButton';
import SwitchAuthLink from './ui/SwitchAuthLink';


type Props = {
  email: string;
  password: string;
  isLogin: boolean;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onSubmit: () => void;
  onToggleMode: () => void;
  loading: boolean;
};

export default function AuthForm({
  email,
  password,
  isLogin,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onToggleMode,
  loading,
}: Props) {
  return (
    <View style={styles.inner}>
      <Title style={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</Title>

      <InputField
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
      />

      <InputField
        label="Пароль"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
      />

      <PrimaryButton onPress={onSubmit} loading={loading}>
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </PrimaryButton>

      <SwitchAuthLink isLogin={isLogin} onToggle={onToggleMode} />
      

    </View>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
});

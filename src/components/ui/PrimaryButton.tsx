import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
  onPress: () => void;
  loading?: boolean;
  children: React.ReactNode;
};

export default function PrimaryButton({ onPress, loading = false, children }: Props) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      loading={loading}
      style={styles.button}
      contentStyle={styles.content}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
  },
  content: {
    paddingVertical: 6,
  },
});

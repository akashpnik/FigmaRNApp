import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type CustomInputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const CustomInput = ({
  value,
  placeholder,
  onChangeText,
}: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});

export default CustomInput;
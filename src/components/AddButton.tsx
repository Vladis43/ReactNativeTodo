import React, { FC, memo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const AddButton: FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 5,
    right: 15,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default memo(AddButton);

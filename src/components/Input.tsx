import React, { FC, memo } from 'react';
import { Dimensions, StyleSheet, TextInput } from 'react-native';

interface Props {
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({ onChangeText }) => {
  return <TextInput style={styles.input} onChangeText={onChangeText} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    height: 60,
    width: Dimensions.get('window').width - 30,
    paddingRight: 75,
    fontSize: 18,
  },
});

export default memo(Input);

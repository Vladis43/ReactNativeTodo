import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {}

const Divider: FC<Props> = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default memo(Divider);

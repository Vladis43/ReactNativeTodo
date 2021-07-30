import React, { FC, memo } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Divider from './Divider';

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onToggleComplete: (id: number) => () => void;
  onDelete: (id: number) => () => void;
  isLast: boolean;
}

const TaskItem: FC<Props> = ({
  id,
  title,
  completed,
  onToggleComplete,
  onDelete,
  isLast,
}) => {
  return (
    <View key={id}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onToggleComplete(id)}>
          {completed ? (
            <View style={[styles.markCircle, styles.markCircleActive]}>
              <Text style={styles.markIcon}>&#10003;</Text>
            </View>
          ) : (
            <View style={styles.markCircle} />
          )}
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={onToggleComplete(id)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={onDelete(id)}>
          <View style={styles.deleteCircle}>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
      </View>
      {!isLast && <Divider />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
  },
  markCircle: {
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markCircleActive: {
    backgroundColor: 'black',
  },
  markIcon: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 110,
    fontSize: 18,
  },
  deleteCircle: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'red',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(TaskItem);

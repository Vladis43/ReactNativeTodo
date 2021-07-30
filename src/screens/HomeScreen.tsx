import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../store/actions';
import { RootState } from '../store/store';
import { Task } from '../store/types';
import Input from '../components/Input';
import AddButton from '../components/AddButton';
import TaskItem from '../components/TaskItem';

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const { loading, tasks } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(actions.getTasksAction());
  }, [dispatch]);

  const onAddTask = () => {
    dispatch(actions.addTaskAction(taskText, tasks));
  };

  const onToggleCompleteTask = (id: number) => () => {
    dispatch(actions.editTaskAction(id, tasks));
  };
  const onDeleteTask = (id: number) => () => {
    dispatch(actions.deleteTaskAction(id, tasks));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {tasks.map((item: Task, index: number) => (
            <TaskItem
              id={item.id}
              title={item.title}
              completed={item.completed}
              onToggleComplete={onToggleCompleteTask}
              onDelete={onDeleteTask}
              isLast={tasks.length - 1 === index}
            />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Input onChangeText={setTaskText} />
          <AddButton title="Add" onPress={onAddTask} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: 'black',
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
  },
});

export default HomeScreen;

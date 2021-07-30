import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Task,
  TaskAction,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_STARTED,
  UPDATE_TASK_SUCCESS,
} from '../types';

export const editTaskAction = (id: number, tasks: Task[]) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch(editTaskStarted());

      const newTasks = tasks.map(item =>
        id === item.id ? { ...item, completed: !item.completed } : item,
      );
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      dispatch(editTaskSuccess(newTasks));
    } catch (error) {
      console.log(error);
      dispatch(editTaskFailure(error));
    }
  };
};

const editTaskStarted = (): TaskAction => ({
  type: UPDATE_TASK_STARTED,
});
const editTaskSuccess = (task: Task[]): TaskAction => ({
  type: UPDATE_TASK_SUCCESS,
  payload: { task },
});
const editTaskFailure = (error: string): TaskAction => ({
  type: UPDATE_TASK_FAILURE,
  payload: { error },
});

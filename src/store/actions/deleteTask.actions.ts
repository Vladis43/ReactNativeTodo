import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DELETE_TASK_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  Task,
  TaskAction,
} from '../types';

export const deleteTaskAction = (id: number, tasks: Task[]) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch(deleteTaskStarted());

      const newTasks = tasks.filter(item => id !== item.id);
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      dispatch(deleteTaskSuccess(newTasks));
    } catch (error) {
      console.log(error);
      dispatch(deleteTaskFailure(error));
    }
  };
};

const deleteTaskStarted = (): TaskAction => ({
  type: DELETE_TASK_STARTED,
});
const deleteTaskSuccess = (task: Task[]): TaskAction => ({
  type: DELETE_TASK_SUCCESS,
  payload: { task },
});
const deleteTaskFailure = (error: string): TaskAction => ({
  type: DELETE_TASK_FAILURE,
  payload: { error },
});

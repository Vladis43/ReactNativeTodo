import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_TASKS_FAILURE,
  GET_TASKS_STARTED,
  GET_TASKS_SUCCESS,
  Task,
  TaskAction,
} from '../types';

export const getTasksAction = () => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch(getTasksStarted());

      const result = await AsyncStorage.getItem('tasks');
      dispatch(getTasksSuccess(JSON.parse(result || '[]')));
    } catch (error) {
      console.log(error);
      dispatch(getTasksFailure(error));
    }
  };
};

const getTasksStarted = (): TaskAction => ({
  type: GET_TASKS_STARTED,
});
const getTasksSuccess = (task: Task[]): TaskAction => ({
  type: GET_TASKS_SUCCESS,
  payload: { task },
});
const getTasksFailure = (error: string): TaskAction => ({
  type: GET_TASKS_FAILURE,
  payload: { error },
});

import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ADD_TASK_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  Task,
  TaskAction,
} from '../types';

export const addTaskAction = (title: string, tasks: Task[]) => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch(addTaskStarted());

      const newTask = {
        id: new Date().getTime(),
        userId: new Date().getTime() + 1,
        title,
        completed: false,
      };
      await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
      dispatch(addTaskSuccess(newTask));
    } catch (error) {
      console.log(error);
      dispatch(addTaskFailure(error));
    }
  };
};

const addTaskStarted = (): TaskAction => ({
  type: ADD_TASK_STARTED,
});
const addTaskSuccess = (task: Task): TaskAction => ({
  type: ADD_TASK_SUCCESS,
  payload: { task },
});
const addTaskFailure = (error: string): TaskAction => ({
  type: ADD_TASK_FAILURE,
  payload: { error },
});

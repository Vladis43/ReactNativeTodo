//For an example of how axios works
import { Dispatch } from 'redux';
import axios from 'axios';
import {
  GET_RANDOM_TASKS_FAILURE,
  GET_RANDOM_TASKS_STARTED,
  GET_RANDOM_TASKS_SUCCESS,
  Task,
  TaskAction,
} from '../types';

export const getRandomTaskAction = () => {
  return async (dispatch: Dispatch<TaskAction>) => {
    try {
      dispatch(getRandomTasksStarted());

      const randomNumber = Number(Math.random().toString().slice(2, 4));
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${randomNumber}`,
      );
      dispatch(getRandomTasksSuccess(result.data));
    } catch (error) {
      console.log(error);
      dispatch(getRandomTasksFailure(error));
    }
  };
};

const getRandomTasksStarted = (): TaskAction => ({
  type: GET_RANDOM_TASKS_STARTED,
});
const getRandomTasksSuccess = (task: Task): TaskAction => ({
  type: GET_RANDOM_TASKS_SUCCESS,
  payload: { task },
});
const getRandomTasksFailure = (error: string): TaskAction => ({
  type: GET_RANDOM_TASKS_FAILURE,
  payload: { error },
});

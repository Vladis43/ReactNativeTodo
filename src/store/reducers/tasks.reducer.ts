import {
  ADD_TASK_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  GET_RANDOM_TASKS_FAILURE,
  GET_RANDOM_TASKS_STARTED,
  GET_RANDOM_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_STARTED,
  GET_TASKS_SUCCESS,
  TaskAction,
  TaskState,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_STARTED,
  UPDATE_TASK_SUCCESS,
} from '../types';

const initialState: TaskState = {
  loading: false,
  tasks: [],
  error: '',
};

const tasksReducer = (state: TaskState = initialState, action: TaskAction) => {
  switch (action.type) {
    //get random
    case GET_RANDOM_TASKS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_RANDOM_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tasks: [...state.tasks, action.payload.task],
      };
    case GET_RANDOM_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //get
    case GET_TASKS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tasks: action.payload.task,
      };
    case GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //add
    case ADD_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tasks: [...state.tasks, action.payload.task],
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //update
    case UPDATE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tasks: action.payload.task,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //delete
    case DELETE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        tasks: action.payload.task,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default tasksReducer;

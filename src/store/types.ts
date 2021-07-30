export const GET_RANDOM_TASKS_STARTED = 'GET_RANDOM_TASKS_STARTED';
export const GET_RANDOM_TASKS_SUCCESS = 'GET_RANDOM_TASKS_SUCCESS';
export const GET_RANDOM_TASKS_FAILURE = 'GET_RANDOM_TASKS_FAILURE';

export const GET_TASKS_STARTED = 'GET_TASKS_STARTED';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const ADD_TASK_STARTED = 'ADD_TASK_STARTED';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const UPDATE_TASK_STARTED = 'UPDATE_TASK_STARTED';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK_STARTED = 'DELETE_TASK_STARTED';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

//Actions
//GET RANDOM
export interface GetRandomTasksStarted {
  type: typeof GET_RANDOM_TASKS_STARTED;
}
export interface GetRandomTasksSuccess {
  type: typeof GET_RANDOM_TASKS_SUCCESS;
  payload: {
    task: Task;
  };
}
export interface GetRandomTasksFailure {
  type: typeof GET_RANDOM_TASKS_FAILURE;
  payload: {
    error: string;
  };
}

//GET
export interface GetTasksStarted {
  type: typeof GET_TASKS_STARTED;
}
export interface GetTasksSuccess {
  type: typeof GET_TASKS_SUCCESS;
  payload: {
    task: Task[];
  };
}
export interface GetTasksFailure {
  type: typeof GET_TASKS_FAILURE;
  payload: {
    error: string;
  };
}

//ADD
export interface AddTaskStarted {
  type: typeof ADD_TASK_STARTED;
}
export interface AddTaskSuccess {
  type: typeof ADD_TASK_SUCCESS;
  payload: {
    task: Task;
  };
}
export interface AddTaskFailure {
  type: typeof ADD_TASK_FAILURE;
  payload: {
    error: string;
  };
}

//UPDATE
export interface EditTaskStarted {
  type: typeof UPDATE_TASK_STARTED;
}
export interface EditTaskSuccess {
  type: typeof UPDATE_TASK_SUCCESS;
  payload: {
    task: Task[];
  };
}
export interface EditTaskFailure {
  type: typeof UPDATE_TASK_FAILURE;
  payload: {
    error: string;
  };
}

//DELETE
export interface DeleteTaskStarted {
  type: typeof DELETE_TASK_STARTED;
}
export interface DeleteTaskSuccess {
  type: typeof DELETE_TASK_SUCCESS;
  payload: {
    task: Task[];
  };
}
export interface DeleteTaskFailure {
  type: typeof DELETE_TASK_FAILURE;
  payload: {
    error: string;
  };
}

export type TaskAction =
  | GetRandomTasksStarted
  | GetRandomTasksSuccess
  | GetRandomTasksFailure
  | GetTasksStarted
  | GetTasksSuccess
  | GetTasksFailure
  | AddTaskStarted
  | AddTaskSuccess
  | AddTaskFailure
  | EditTaskStarted
  | EditTaskSuccess
  | EditTaskFailure
  | DeleteTaskStarted
  | DeleteTaskSuccess
  | DeleteTaskFailure;

export interface TaskState {
  loading: boolean;
  tasks: Task[];
  error: string;
}

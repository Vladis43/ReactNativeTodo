import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { TaskAction } from './types';
import tasksReducer from './reducers/tasks.reducer';

const rootReducer = combineReducers({ tasks: tasksReducer });

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore<AppState, TaskAction, {}, {}>(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, TaskAction>),
  ),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

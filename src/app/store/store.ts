import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Your root reducer
import rootSaga from './sagas'; // Your root saga

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

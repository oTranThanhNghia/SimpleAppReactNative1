import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../stores/reducers';
import sagas from '../stores/sagas';

const config = {
  key: 'root',
  storage,
  blacklist: ['homeReducer'],
  debug: true,
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, initialState, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  // console.log('debug persistStore callback');
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;

import UsersReducer from './reducers/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: UsersReducer,
});

// on configure la persistance pour lui indiquer de stocker les données dans le AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// on créé un reducer persistant à partir de notre rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk], // permet de gérer une erreur de redux-persist depuis l'introduction de @reduxjs/toolkit
});

const persistor = persistStore(store);

export {store, persistor};

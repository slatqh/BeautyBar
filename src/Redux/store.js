import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';


const persistConfig = {
  key: 'Auth',
  storage,
  whitelist: ['Auth']
}

const pReducer = persistReducer(persistConfig, reducers)
export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
export const persistor = persistStore(store);


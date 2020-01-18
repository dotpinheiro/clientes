import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

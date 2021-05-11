import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import Reducer from "./reducer";

//redux logger
const middlewares = [logger];

export const store = createStore(Reducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

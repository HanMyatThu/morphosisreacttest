import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import Reducer from "./reducer";

//redux logger
const middlewares = [logger, thunk];

export const store = createStore(Reducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

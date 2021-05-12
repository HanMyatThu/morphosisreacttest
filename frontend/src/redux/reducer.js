import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-reducer";
import collectionReducer from "./collection/collection-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "collections"],
};

const rootReducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

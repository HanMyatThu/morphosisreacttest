import { collectionActionTypes } from "./collection-types";
import axios from "axios";

export const setCollectionsData = (collections) => ({
  type: collectionActionTypes.FETCH_ALL,
  collections,
});

export const fetchData = () => (dispatch) => {
  return axios
    .get("http://localhost:8000/api/robots")
    .then(({ data }) => {
      return dispatch(setCollectionsData(data.data));
    })
    .catch((e) => {
      console.error(e);
    });
};

// export const addItemsToCart = (item) => ({
//   type: collectionActionTypes.ADD_ITEMS,
//   payload: item,
// });

// export const removeItemFromCart = (item) => ({
//   type: collectionActionTypes.CLEAR_ITEM_FROM_CART,
//   payload: item,
// });

// export const removeItem = (item) => ({
//   type: collectionActionTypes.REMOVE_ITEM,
//   payload: item,
// });

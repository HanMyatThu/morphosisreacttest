import collectionActionTypes from "./collection-types";

const INITIAL_STATE = {
  collections: [],
};

const CollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionActionTypes.FETCH_ALL:
      return {
        ...state,
        collections: action.collections,
      };
    default:
      return state;
  }
};

export default CollectionReducer;

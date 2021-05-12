import { createSelector } from "reselect";

const selectState = (state) => state.collections;

export const selectCollectionItems = createSelector(
  [selectState],
  (collections) => {
    return collections.collections;
  }
);

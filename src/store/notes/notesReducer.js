import {ACTION_CREATE_NOTE} from './notesActions';

let newState = {items: [], sortType: 0, latestId: 0};

export const notesReducer = (state = newState, action) => {
  switch (action.type) {
    case ACTION_CREATE_NOTE:
      const {text, dueDate} = action.payload;
      const id = state.latestId + 1;
      const newItem = {
        id,
        text,
        dueDate,
      };
      return {
        items: [...state.items, newItem],
        latestId: id,
      };
    default:
      return state;
  }
};

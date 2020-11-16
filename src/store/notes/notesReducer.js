import {ACTION_CREATE_NOTE} from './notesActions';

let newState = {items: [], sortType: 0};

export const notesReducer = (state = newState, action) => {
  switch (action.type) {
    case ACTION_CREATE_NOTE:
      const {id, text, dueDate} = action.payload;
      const newItem = {
        id,
        text,
        dueDate,
      };
      return {
        items: [...state.items, newItem],
      };
    default:
      return state;
  }
};

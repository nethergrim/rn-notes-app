export const ACTION_CREATE_NOTE = 'CREATE_NOTE';
export const ACTION_CREATE_NOTE_SUCCESS = 'ACTION_CREATE_NOTE_SUCCESS';

export function createNote(text, dueDate) {
  return {
    type: ACTION_CREATE_NOTE,
    payload: {
      text,
      dueDate,
    },
  };
}

export function markNoteAs(done, id) {}

export function removeNote(id) {}

export function sortBy(sortType) {}

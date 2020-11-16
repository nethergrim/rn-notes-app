export const ACTION_CREATE_NOTE = 'CREATE_NOTE';
export const ACTION_CREATE_NOTE_SUCCESS = 'ACTION_CREATE_NOTE_SUCCESS';

export function createNote(text, dueDate) {
  return {
    type: ACTION_CREATE_NOTE,
    payload: {
      id: getRandomInt(Number.MAX_SAFE_INTEGER),
      text,
      dueDate,
    },
  };
}

export function markNoteAs(done, id) {}

export function removeNote(id) {}

export function sortBy(sortType) {}

// TODO move to utils
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

import {useSelector} from 'react-redux';

export function getNotes() {
  return useSelector((state) => state.notesReducer.items);
}

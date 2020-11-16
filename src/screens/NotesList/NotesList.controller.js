import React from 'react';
import {createNote, getNotes} from '../../store/notes';
import {useDispatch} from 'react-redux';

const NotesListController = ({children}) => {
  const dispatch = useDispatch();
  const [text, onTextChanged] = React.useState('');
  const items = getNotes();
  const create = () => {
    if (text.length > 0) {
      dispatch(createNote(text, Date()));
      onTextChanged('');
    }
  };
  return children({items, create, text, onTextChanged});
};

export default NotesListController;

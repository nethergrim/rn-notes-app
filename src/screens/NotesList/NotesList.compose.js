import React from 'react';
import NotesListView from './NotesList.view';
import NotesListController from './NotesList.controller';

export const NotesList = () => {
  return (
    <NotesListController>
      {(props) => <NotesListView {...props} />}
    </NotesListController>
  );
};

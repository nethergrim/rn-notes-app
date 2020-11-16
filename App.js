/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {notesReducer} from './src/store/notes/notesReducer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {NotesList} from './src/screens/NotesList';

let store = createStore(combineReducers({notesReducer}));

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView style={styles.flex}>
          <NotesList />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;

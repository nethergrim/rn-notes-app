import React from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const renderNote = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const keyExtractor = (item) => {
  return '' + item.id;
};

const NotesListView = ({items, create, text, onTextChanged}) => {
  return (
    <View style={styles.container}>
      <View style={styles.addNoteContainer}>
        <TextInput
          placeholder={'Create a new note...'}
          style={styles.input}
          onChangeText={onTextChanged}>
          {text}
        </TextInput>
        <TouchableOpacity onPress={create}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderNote}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default NotesListView;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 32,
  },
  addNoteContainer: {
    flexDirection: 'row',
    padding: 16,
    height: 40,
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    width: '100%',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  addButton: {
    fontSize: 32,
    margin: 8,
    height: 40,
    textAlign: 'center',
    width: 40,
    color: '#000000',
  },
  listItem: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
  },
  text: {
    height: 40,
    fontSize: 18,
    width: '100%',
    color: '#000',
  },
  list: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
});

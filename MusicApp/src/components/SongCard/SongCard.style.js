import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },

  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  artist: {
    fontWeight: '500',
    fontSize: 15,
  },

  year: {
    marginLeft: 15,
    color: 'gray ',
    fontSize: 13,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  soldout_title: {
    color: 'red',
    fontSize: 12,
  },

  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },

  content_container: {
    flexDirection: 'row',
  },
});

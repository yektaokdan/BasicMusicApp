import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search.." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;

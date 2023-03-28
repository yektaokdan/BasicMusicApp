import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar';

export default function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  seperator: {
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
});

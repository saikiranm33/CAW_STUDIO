import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBox from './components/SearchBox';
import TagView from './components/TagView';

const MainHeader = props => {
  return (
    <View style={styles.container}>
      <SearchBox />
      <TagView {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
});

export default MainHeader;

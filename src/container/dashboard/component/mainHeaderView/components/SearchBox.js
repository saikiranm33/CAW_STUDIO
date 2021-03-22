import React from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import COLORS from '../../../../../utility/colors';
import CustomIcon from '../../../../../utility/CustomIcon';
import {FONT_LARGE} from '../../../../../utility/textSize';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search posts and members'}
      />
      <CustomIcon
        name="search"
        size={20}
        color={COLORS.LIGHT_COLOR}
        style={styles.iconSyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderWidth: 0.7,
    padding: Platform.OS === 'android' ? 0 : 7,
    borderColor: COLORS.APP_THEME_COLOR,
    paddingHorizontal: 5,
  },
  textInput: {
    fontSize: FONT_LARGE,
  },
  iconSyle: {
    alignSelf: 'center',
  },
});

export default SearchBox;

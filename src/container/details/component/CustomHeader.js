import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {goBack} from '../../../utility/RootNavigation';
import {FONT_XLARGE} from '../../../utility/textSize';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={40}
        style={styles.backIcon}
        onPress={() => goBack()}
      />
      <Text style={styles.title}>Question</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
  },
  backIcon: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: FONT_XLARGE,
  },
});

export default CustomHeader;

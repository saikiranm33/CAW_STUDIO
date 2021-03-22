import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../../../../../utility/colors';

const TypeInfo = props => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.type}</Text>
      <Text>{data.duration}</Text>
    </View>
  );
};

export default TypeInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
  },
  title: {
    color: COLORS.LIGHT_COLOR,
  },
});

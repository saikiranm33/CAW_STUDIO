import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../../../../../utility/colors';

const SameQuestionView = props => {
  const {data} = props;
  const {reactImages, numberOfQuestions} = data;
  return (
    <View style={styles.container}>
      {reactImages.map((item, index) => {
        return <Image key={index} style={styles.imageStyle} source={item} />;
      })}
      <Text style={styles.title}>
        {numberOfQuestions} members have this question
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.LIGHT_COLOR,
    marginVertical: 10,
  },
  title: {
    alignSelf: 'center',
    paddingLeft: 5,
    color: COLORS.DARK_COLOR,
  },
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imageStyle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
  },
});

export default SameQuestionView;

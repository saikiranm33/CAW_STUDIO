import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';

const OuterComment = props => {
  return (
    <View style={styles.conatiner}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/profile_img.jpeg')}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Tester</Text>
        <Text style={styles.subTitle}>
          Not sure about rights. Looks like its a matter of concern that our
          schools don’t take it seriously such matters and treat it so lightly
          like its a fault of the student
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  subContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    padding: 5,
    fontSize: FONT_LARGE,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subTitle: {
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginTop: 10,
  },
});

export default OuterComment;

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../../../../../utility/colors';
import CustomIcon from '../../../../../utility/CustomIcon';

const ProfileInfo = props => {
  const {data} = props;
  const {diagonsed, name, profileImg} = data;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.imageStyle} source={profileImg} />
        <View style={styles.subHeader}>
          <View style={styles.subContainer}>
            <Text>{name}</Text>
            <Text style={styles.questionTxt}>Asked a Question</Text>
          </View>
          <Text style={styles.diagoneType}>{diagonsed}</Text>
        </View>
      </View>
      <View style={styles.moreIconContainer}>
        <CustomIcon name={'more'} style={styles.moreIcon} />
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  subHeader: {
    alignContent: 'flex-start',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  moreIcon: {
    alignSelf: 'flex-start',
  },
  moreIconContainer: {
    marginTop: 10,
  },
  questionTxt: {
    paddingLeft: 5,
    color: COLORS.LIGHT_COLOR,
  },
  diagoneType: {
    color: COLORS.APP_THEME_COLOR,
  },
  statusTxt: {
    paddingVertical: 5,
    color: COLORS.APP_THEME_COLOR,
  },
});

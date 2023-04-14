import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../../../utility/colors';
import BaseIcon from '../../../utility/CustomIcon';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE, FONT_XLARGE} from '../../../utility/textSize';

const CommunityDropDownView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMMUNITY</Text>
      <View style={styles.subContainer}>
        <View style={styles.allCommunities}>
          <Text style={styles.headerTitle}>All Communities</Text>
          <BaseIcon
            name={'right'}
            style={styles.rightIcon}
            color={COLORS.APP_THEME_COLOR}
          />
        </View>
        <Image
          style={styles.img}
          source={require('../../../assets/images/profile_img.jpeg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: FONT_LARGE,
    color: COLORS.LIGHT_COLOR,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allCommunities: {
    flexDirection: 'row',
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: FONT_XLARGE,
    color: COLORS.APP_THEME_COLOR,
    fontWeight: FONT_WEIGHT_MAX,
  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default CommunityDropDownView;

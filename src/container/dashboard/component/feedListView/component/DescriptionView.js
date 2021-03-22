import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../../../utility/colors';
import {
  FONT_WEIGHT_100,
  FONT_WEIGHT_MAX,
} from '../../../../../utility/fontWeight';
import {navigate} from '../../../../../utility/RootNavigation';
import {FONT_LARGE, FONT_SMALL} from '../../../../../utility/textSize';

const DescriptionView = props => {
  const {data, index, isFrom} = props;
  const {title, subtitle, location} = data;
  return (
    <TouchableOpacity onPress={() => navigate('Details', {index: index})}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.container}>
        <Text style={styles.subTitle}>
          {subtitle}
          {isFrom === 'Feed' && (
            <Text style={styles.seeMoreTxt}>
              {' ...'}
              See More
            </Text>
          )}
        </Text>
      </View>

      <View style={styles.subContainer}>
        <Icon
          name="map-marker-outline"
          size={20}
          color={COLORS.APP_THEME_COLOR}
        />
        <Text style={styles.locationTxt}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  title: {
    fontSize: FONT_LARGE,
    color: COLORS.DARK_COLOR,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subTitle: {
    lineHeight: 23,
    color: COLORS.DARK_COLOR,
    fontWeight: FONT_WEIGHT_100,
  },
  seeMoreTxt: {
    paddingLeft: 5,
    color: 'black',
    fontWeight: FONT_WEIGHT_MAX,
  },
  subContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  locationTxt: {
    alignSelf: 'center',
    fontSize: FONT_SMALL,
    color: COLORS.APP_THEME_COLOR,
  },
});

export default DescriptionView;

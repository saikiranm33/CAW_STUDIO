import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../../../../utility/colors';
import {useDispatch} from 'react-redux';
import {getNewsFeedAction, getSelectedTag, SELECTED_TAG} from '../../../../../redux/actions/getFeed';
import {ACTION_TYPES} from '../../../../../utility/customText';

const TagView = props => {
  let dispatch = useDispatch();
  const [selectedIndex, updateSelectedIndex] = useState(0);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.container}>
        {TAG_LIST.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                dispatch(getSelectedTag(index));
                updateSelectedIndex(index);
                dispatch(getSelectedTag(index));
              }}
              style={[
                styles.subConatiner,
                {
                  backgroundColor:
                    selectedIndex == index
                      ? 'rgba(0, 169, 129,  0.1)'
                      : 'white',
                },
              ]}>
              <Text style={{color: COLORS.APP_THEME_COLOR}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: -5,
  },
  subConatiner: {
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export const TAG_LIST = [
  'Carbon Emission',
  'Lifestyle',
  'Grocery Info',
  'Beauty Products',
];

export default TagView;

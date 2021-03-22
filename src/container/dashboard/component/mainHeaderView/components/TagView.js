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
import {getNewsFeedAction} from '../../../../../redux/actions/getFeed';
import {ACTION_TYPES} from '../../../../../utility/customText';

const TagView = props => {
  let dispatch = useDispatch();
  const [selectedIndex, updateSelectedIndex] = useState(0);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.container}>
        {TagsArr.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                updateSelectedIndex(index);
                dispatch(getNewsFeedAction({type: ACTION_TYPES.GET_DATA}));
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

const TagsArr = [
  'ALL Posts',
  'News',
  'Diet',
  'Lifestyle',
  'Symptoms',
  'Others',
];

export default TagView;

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import COLORS from '../../../utility/colors';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';
import ProgressBar from '../../dashboard/component/feedListView/component/ProgressBar';

const Activity = props => {
  const { activityData } = props;
  const [text, updateText] = useState('');

  return (
    <View style={styles.conatiner}>
      <Text style={{ marginVertical: 10, fontWeight: "bold", color: "black" }}>Activities</Text>
      {activityData.map((item) => {
        console.log("item",item);
        return (
          <ActivityItem {...item} />
        )
      })}
    </View>
  );
};

const ActivityItem = props => {
  const [text, updateText] = useState('');
  const { bgcolor, completed, title, imagePath } = props;

  return (
    <View style={{ margin:5,flexDirection:"row"}}>
      <Image source={imagePath} style={{height:50,width:50,borderRadius:20,marginRight:10}} />
       <ProgressBar title={title} completed={completed} bgcolor={bgcolor}/>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    marginHorizontal:20
  },
  subContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    height: 40,
  },
  title: {
    padding: 5,
    fontSize: FONT_LARGE,
    fontWeight: FONT_WEIGHT_MAX,
  },
  inputPlaceHolder: {
    marginHorizontal: 20,
    width: '70%',
    color: 'black',
  },
  postTxt: {
    alignSelf: 'center',
    color: COLORS.APP_THEME_COLOR,
    fontSize: FONT_LARGE,
    fontWeight: FONT_WEIGHT_MAX,
  },
});

export default Activity;

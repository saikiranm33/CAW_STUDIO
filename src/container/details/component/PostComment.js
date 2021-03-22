import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import COLORS from '../../../utility/colors';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';

const PostComment = props => {
  const {postAction} = props;
  const [text, updateText] = useState('');
  return (
    <View style={styles.conatiner}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder={'Post Comment'}
          style={styles.inputPlaceHolder}
          value={text}
          onChangeText={value => updateText(value)}
        />
        <Text
          style={styles.postTxt}
          onPress={() => {
            if (text) {
              postAction(text);
              return updateText('');
            } else {
              alert('Please Enter Text');
            }
          }}>
          Post
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
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

export default PostComment;

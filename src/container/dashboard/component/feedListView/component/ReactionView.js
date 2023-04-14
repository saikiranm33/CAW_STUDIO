import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../../../../../utility/colors';
import BaseIcon from '../../../../../utility/CustomIcon';
import {postLikeAction} from '../../../../../redux/actions/getFeed';
import {ACTION_TYPES} from '../../../../../utility/customText';

const ReactionView = props => {
  const {data, index, onShareAction} = props;
  const {likes, isLikeSelected, comments} = data;

  let dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ReactionButton
        name={'thumbsup'}
        value={likes}
        isSelected={isLikeSelected}
        onActionClick={() =>
          dispatch(
            postLikeAction({
              type: ACTION_TYPES.UPDATE_LIKE,
              index: index,
            }),
          )
        }
      />
      <ReactionButton name={'shape'} value={comments} isSelected={false} />
      <ReactionButton name={'bookmark'} isSelected={false} />
      <ReactionButton
        name={'share'}
        isSelected={false}
        onActionClick={() => onShareAction()}
      />
    </View>
  );
};

export default ReactionView;

const ReactionButton = props => {
  const {name, value, onActionClick, isSelected} = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onActionClick}>
      <BaseIcon
        size={20}
        style={styles.iconStyle}
        name={name}
        color={isSelected ? COLORS.APP_THEME_COLOR : COLORS.DARK_COLOR}
      />
      {value && <Text style={styles.value}>{value}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  iconStyle: {
    paddingLeft: 5,
    alignSelf: 'center',
  },
  value: {
    paddingLeft: 5,
    alignSelf: 'center',
  },
});

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeedAction} from '../../../../redux/actions/getFeed';
import COLORS from '../../../../utility/colors';
import {ACTION_TYPES} from '../../../../utility/customText';
import Dummy_Info, {SHARE_ACTION} from '../../data/dummyData';
import DescriptionView from './component/DescriptionView';
import ProfileInfo from './component/ProfileInfo';
import ReactionView from './component/ReactionView';
import SameQuestionView from './component/SameQuestionView';
import TypeInfo from './component/TypeInfo';
import {FacebookLoader} from 'react-native-easy-content-loader';
import ShowModelInfo from '../../../../component/ItemModalView';

const FeedListView = () => {
  let dispatch = useDispatch();
  const [updateFeedDataAction] = useState(Dummy_Info);
  const [modalVisible, setModalVisible] = useState(false);
  let getMyNewFeed = useSelector(state => state.GetFeedReducer.result);
  let isLoading = useSelector(state => state.GetFeedReducer.isLoading);

  useEffect(() => {
    dispatch(getNewsFeedAction({type: ACTION_TYPES.GET_DATA}));
  }, []);

  return (
    <View>
      <FlatList
        data={isLoading ? [1, 2, 3, 5] : getMyNewFeed}
        renderItem={({item, index}) => {
          if (isLoading) {
            return <FacebookLoader active />;
          } else {
            return (
              <FeedListCard
                loading={true}
                key={item.id + `${index}`}
                data={item}
                mainData={getMyNewFeed}
                updateFeedDataAction={updateFeedDataAction}
                dispatch={dispatch}
                index={index}
                onShareAction={() => setModalVisible(!modalVisible)}
                isFrom={'Feed'}
              />
            );
          }
        }}
        keyExtractor={(item, index) => index}
      />
      <ShowModelInfo
        data={SHARE_ACTION}
        modalVisible={modalVisible}
        setModalVisible={isVisible => setModalVisible(isVisible)}
      />
    </View>
  );
};
export const FeedListCard = props => {
  return (
    <View style={styles.container}>
      <TypeInfo {...props} />
      <ProfileInfo {...props} />
      <DescriptionView {...props} />
      <SameQuestionView {...props} />
      <ReactionView {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: COLORS.LIGHT_COLOR,
  },
});

export default FeedListView;

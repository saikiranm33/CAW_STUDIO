import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeedAction } from '../../../../redux/actions/getFeed';
import COLORS from '../../../../utility/colors';
import { ACTION_TYPES } from '../../../../utility/customText';
import Dummy_Info, { SHARE_ACTION } from '../../data/dummyData';
import DescriptionView from './component/DescriptionView';
import ProfileInfo from './component/ProfileInfo';
import ReactionView from './component/ReactionView';
import SameQuestionView from './component/SameQuestionView';
import TypeInfo from './component/TypeInfo';
import { FacebookLoader } from 'react-native-easy-content-loader';
import ShowModelInfo from '../../../../component/ItemModalView';
import VideoScreen from './component/VideoView';
import MapWebView from './component/MapWebView';
import Map from '../../../lifestyle/component/MapView';
import { TAG_LIST } from '../mainHeaderView/components/TagView';
import Details from '../../../details';
import LifeStyleView from '../../../lifestyle';
import GroceryList from '../../../../JsonData/GroceryList'
import ComesticData from '../../../../JsonData/BeautyProduct'


const FeedListView = () => {
  let dispatch = useDispatch();
  const [updateFeedDataAction] = useState(Dummy_Info);
  const [modalVisible, setModalVisible] = useState(false);
  const [modelNotificationInfo, setModalNotificationInfo] = useState([]);

  let isLoading = useSelector(state => state.GetFeedReducer.isLoading);
  let selectedTag = useSelector(state => state.GetFeedReducer.selectedTag) || 0;

  const ref = useRef()

  useEffect(() => {
    dispatch(getNewsFeedAction({ type: ACTION_TYPES.GET_DATA }));
  }, []);


  useEffect(() => {
    const initialIndex = 1 //random number
    if (ref.current) {
    }
  }, [ref])


  return (
    <View>
      {selectedTag === 0 ?
        <Details />
        :
        selectedTag === 2 || selectedTag === 3  ?
        <View style={{}}>
        <FlatList
          data={isLoading ? [1, 2, 3, 5] : selectedTag === 2 ? GroceryList : ComesticData}
          renderItem={({ item, index }) => {
            if (isLoading) {
              return <FacebookLoader active />;
            } else {
              return (
                <FeedListCard
                  key={item.id + `${index}`}
                  data={item}
                  index={index}
                  onShareAction={() => setModalVisible(!modalVisible)}
                  isFrom={'Feed'}
                  onInfoActionClicked={(item) => {
                    console.log("Item", item)
                    setModalVisible(true)
                    setModalNotificationInfo(item)
                  }}
                  isInfoRequired={true}
                />
              );
            }
          }}
          keyExtractor={(item, index) => index}
        />
        <ShowModelInfo
          data={modelNotificationInfo}
          modalVisible={modalVisible}
          setModalVisible={isVisible => setModalVisible(isVisible)}
        />
      </View>
        :
          <LifeStyleView />
      }

    </View>
  );
};
export const FeedListCard = props => {

  return (
    <View style={styles.container}>
      <TypeInfo  {...props} />
      {/* <ProfileInfo {...props} /> */}
      {/* {props.index%2 == 0 ? <DescriptionView {...props} /> :<VideoScreen {...props}/>  } */}
      {/* <DescriptionView {...props} /> */}
      {/* <SameQuestionView {...props} />
      <ReactionView {...props} /> */}

    </View>
  );
};

const params = { videoUrl: "" }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef'
  },
  title: {
    color: COLORS.LIGHT_COLOR,
  },
});

export default FeedListView;
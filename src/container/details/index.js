import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FeedListCard} from '../dashboard/component/feedListView';
import InnerComment from './component/InnerComment';
import OuterComment from './component/OuterComment';
import PostComment from './component/PostComment';
import {FONT_XLARGE} from '../../utility/textSize';
import {postCommentAction} from '../../redux/actions/getFeed';
import CustomHeader from './component/CustomHeader';
import ShowModelInfo from '../../component/ItemModalView';
import {SHARE_ACTION} from '../dashboard/data/dummyData';

const Details = props => {
  const {route} = props;
  const {params} = route;
  let getMyNewFeed = useSelector(state => state.GetFeedReducer.result);
  let dispatch = useDispatch();
  const scrollViewRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios' ? (Platform.isPad ? 'padding' : 'height') : null
      }
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        stickyHeaderIndices={[0, 4]}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        keyboardShouldPersistTaps={'always'}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <CustomHeader />
        <FeedListCard
          isFrom={'Details'}
          data={getMyNewFeed[params.index]}
          index={params.index}
          onShareAction={() => setModalVisible(!modalVisible)}
        />
        <OuterComment />
        <InnerComment data={getMyNewFeed[params.index].comment_posted} />
      </ScrollView>
      <View style={styles.postContainer}>
        <PostComment
          postAction={commentText => {
            let commentObj = {
              name: 'Rohit Shetty',
              title: commentText,
            };
            dispatch(
              postCommentAction({index: params.index, comment: commentObj}),
            );
          }}
        />
      </View>
      <ShowModelInfo
        data={SHARE_ACTION}
        modalVisible={modalVisible}
        setModalVisible={isVisible => setModalVisible(isVisible)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backIcon: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: FONT_XLARGE,
  },
  scrollContainer: {
    marginBottom: 65,
  },
  postContainer: {
    position: 'absolute',
    height: 60,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Details;

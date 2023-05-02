/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView} from 'react-native';
import FeedListView from './component/feedListView';
import MainHeader from './component/mainHeaderView';
import CommunityDropDownView from '../lifestyle/component/PollutionDataView';
import {useDispatch, useSelector} from 'react-redux';

const Dashboard = () => {

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      {/* <CommunityDropDownView /> */}
      <MainHeader />
      <FeedListView />
    </ScrollView>
  );
};

export default Dashboard;

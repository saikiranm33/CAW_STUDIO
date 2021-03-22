import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AddModalView from '../component/AddModalView';
import Dashboard from '../container/dashboard';
import CustomIcon from '../utility/CustomIcon';
import COLORS from '../utility/colors';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../container/details';
import DummyView from '../container/dummy';
import {ADD_ACTION} from '../container/dashboard/data/dummyData';

const Tab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Feeds';

const PayScreenComponent = () => {
  return null;
};

const ICON_SIZE = 20;

const PaymentStack = props => {
  return (
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={customTabBarStyle}>
      <Tab.Screen
        name="Feeds"
        component={DashboardScreens}
        options={{
          tabBarLabel: 'Feeds',
          tabBarIcon: ({focused}) => (
            <CustomIcon
              focused={focused}
              name="feed"
              size={ICON_SIZE}
              color={checkFocusedColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={DummyView}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({focused}) => (
            <CustomIcon
              focused={focused}
              name="group"
              size={ICON_SIZE}
              color={checkFocusedColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreenComponent}
        options={{
          tabBarButton: () => <AddModalView data={ADD_ACTION} />,
        }}
      />
      <Tab.Screen
        name="messages"
        component={DummyView}
        options={{
          tabBarLabel: 'messages',
          tabBarIcon: ({focused}) => (
            <CustomIcon
              focused={focused}
              name="groupcoment"
              size={ICON_SIZE}
              color={checkFocusedColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={DummyView}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({focused}) => (
            <CustomIcon
              focused={focused}
              name="box"
              size={ICON_SIZE}
              color={checkFocusedColor(focused)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DashboardStack = createStackNavigator();

function DashboardScreens() {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerTitle: 'Home'}}
      />
      <DashboardStack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Home'}}
      />
    </DashboardStack.Navigator>
  );
}

const checkFocusedColor = focused => {
  return focused ? COLORS.APP_THEME_COLOR : COLORS.LIGHT_COLOR;
};

const customTabBarStyle = {
  activeTintColor: COLORS.APP_THEME_COLOR,
  inactiveTintColor: COLORS.LIGHT_COLOR,
  allowFontScaling: true,
  labelStyle: {fontSize: 12},
  tabStyle: {paddingTop: 5},
  style: {height: 60, borderTopColor: 'gray'},
};

export default PaymentStack;

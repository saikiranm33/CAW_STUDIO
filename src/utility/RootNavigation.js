import * as React from 'react';
import {StackActions, DrawerActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function toggleDrawer(...args) {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function goBack() {
  navigationRef.current?.goBack();
}

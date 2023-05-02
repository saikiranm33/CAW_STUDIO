import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../utility/colors';
import BaseIcon from '../utility/CustomIcon';
import ShowModelInfo from './ItemModalView';

const PayScreen = props => {
  // const {data} = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.buttonStyle}>
        <BaseIcon
          name="plus"
          color={'white'}
          size={50}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {/* <ShowModelInfo
          data={data}
          modalVisible={modalVisible}
          setModalVisible={isVisible => setModalVisible(isVisible)}
          isBottomCloseRequired={true}
        /> */}
      </View>
    </>
  );
};

export default PayScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    marginBottom: 80,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.APP_THEME_COLOR,
    borderRadius: 30,
    justifyContent: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  closeContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    bottom: 25,
  },
  closeIcon: {
    alignSelf: 'center',
  },
});

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../utility/colors';
import BaseIcon from '../utility/CustomIcon';

const ShowModelInfo = props => {
  const {modalVisible, setModalVisible, data, isBottomCloseRequired} = props;
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.contentView}>
      <View style={styles.content}>
        {data.map((item, index) => {
          return <QueryItemView key={index} {...item} />;
        })}
      </View>

      {isBottomCloseRequired && (
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => {
            setModalVisible(false);
          }}>
          <BaseIcon
            name={'close'}
            color={COLORS.LIGHT_COLOR}
            style={styles.closeIcon}
            size={20}
          />
        </TouchableOpacity>
      )}
    </Modal>
  );
};

const QueryItemView = props => {
  const {icon, title, subtitle, index} = props;

  return (
    <View key={index} style={addStyles.container}>
      <View style={addStyles.subContainer}>
        <View style={addStyles.iconContainer}>
          <BaseIcon
            name={icon}
            style={addStyles.moreIcon}
            color={COLORS.APP_THEME_COLOR}
            size={20}
          />
        </View>

        <View style={addStyles.subHeader}>
          <View style={addStyles.subContainer}>
            <Text>{title}</Text>
          </View>
          <Text style={addStyles.diagoneType}>{subtitle}</Text>
        </View>
      </View>
      <View style={addStyles.moreIconContainer}>
        <BaseIcon name={'right'} style={styles.moreIcon} />
      </View>
    </View>
  );
};

export default ShowModelInfo;

const addStyles = StyleSheet.create({
  container: {
    marginVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  subHeader: {
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  moreIcon: {
    alignSelf: 'center',
  },
  moreIconContainer: {
    alignSelf: 'center',
  },
  questionTxt: {
    paddingLeft: 5,
    color: COLORS.LIGHT_COLOR,
  },
  diagoneType: {
    color: COLORS.LIGHT_COLOR,
  },
  statusTxt: {
    paddingVertical: 5,
    color: COLORS.APP_THEME_COLOR,
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(0, 169, 129,  0.25)',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

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

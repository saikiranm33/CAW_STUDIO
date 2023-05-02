import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../utility/colors';
import BaseIcon from '../utility/CustomIcon';
import { Rating, AirbnbRating } from 'react-native-ratings';
import FeedListCard from '../container/dashboard/component/feedListView/component/TypeInfo'
import { ScrollView } from 'react-native-gesture-handler';
import Lottie from 'lottie-react-native';


const ShowModelInfo = props => {
  const { modalVisible, setModalVisible, data, isBottomCloseRequired } = props;
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.contentView}>
        <View style={{backgroundColor:"white",margin:0,borderRadius :15}}>
        <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",padding:10}}>Details</Text>
        </View>

      <ScrollView >
        {data.map((item, index) => {
        // console.log("Main 123",item);
          return <QueryItemView key={index} data={item}  />;
        })}
      </ScrollView>

      {true && (
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

const sampleData = [
  {
    id: 0,
    title: "Maggie",
    mainRating: 8.0,
    healthyRating: 8.8,
    sustainabilityRating: 5.6,
    imagePath: require("../assets/images/Maggie.png"),
    nutritionInfo: [
      {
        title: "protein",
        value: 10,
        color: "green"
      },
      {
        title: "carbs",
        value: 50,
        color: "red"
      }
    ],
    details: {
    }
  },
  {
    id: 1,
    title: "Redbull",
    mainRating: 8.0,
    healthyRating: 8.8,
    sustainabilityRating: 5.6,
    imagePath: require("../assets/images/redbull.png"),
    nutritionInfo: [
      {
        title: "protein",
        value: 10,
        color: "green"
      },
      {
        title: "carbs",
        value: 50,
        color: "red"
      }
    ],
    details: {}

  }

]

const QueryItemView = props => {
  const { index,data } = props;
  return (
    <View key={index} style={addStyles.container}>
      {data?.type == "image" ? 
      <Image resizeMode="contain" source={data?.imagePath} style={{width:300,height:120,alignSelf:"center"}} />
     :
     <Lottie source={data?.imagePath} autoPlay={true} loop={true} onAnimationLoop style={{ width: "95%", alignSelf: "center",marginVertical :1 }} />

    }
      <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold",marginTop: 5 }}>{data.title}</Text>
      <ScrollView style={{ marginTop: 5, marginHorizontal: 20,paddingBottom:15 }}>
        {data?.description.map((item, index) => {
          return (
            <View style={{marginTop:5}}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.title}</Text>
              <Text style={{ fontSize: 13, color: "gray",}}>{item?.Description}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default ShowModelInfo;

const addStyles = StyleSheet.create({
  container: {
    marginHorizontal:1,
    backgroundColor:"white",
    marginVertical:5,
    borderRadius:2
  },
  subContainer: {
    //  flexDirection: 'row',

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
    color: COLORS.DARK_COLOR,
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold"
  },
  statusTxt: {
    paddingVertical: 5,
    color: COLORS.APP_THEME_COLOR,
  },
  iconContainer: {
    height: 40,
    width: 40,
    // backgroundColor: 'rgba(0, 169, 129,  0.25)',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,

  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    marginVertical:20,
    marginBottom:100,
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
    bottom: -60,
  },
  closeIcon: {
    alignSelf: 'center',
  },
});

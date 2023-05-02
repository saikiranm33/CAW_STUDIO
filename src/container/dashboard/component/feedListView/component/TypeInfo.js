import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../../../../utility/colors';
import Speedometer from 'react-native-speedometer-chart';
import LinearGradient from 'react-native-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie'
import ProgressBar from "./ProgressBar"
import { Rating, AirbnbRating } from 'react-native-ratings';

//background-image: linear-gradient(to right bottom, #fc1b1b, #f96900, #e99b00, #cec500, #a8eb12);

const TypeInfo = props => {
  const data = props?.data;
  return (
    <View style={{
       margin: 5, marginLeft: 5, borderRadius: 10, borderColor: "#efefef", borderWidth: 1, backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    }}>
      <View style={{  flexDirection: "row"}}>
        <View style={{ width: "27%", marginLeft: 10, marginTop: 12 }}>
          <Image resizeMode="contain"  style={{  width: 120, height: 100, alignSelf: "center" }} source={data.imagePath} />
        </View>
        <View style={{ width: "60%", marginLeft: 10 }}>
          <Text style={{ marginTop: 10, fontWeight: "bold", color: "black", fontSize: 25, alignSelf: "center" }}>{data.title}</Text>
          <DescriptionView overallRating={data?.EcoRating} />
        </View>
        {props?.isInfoRequired &&
            <TouchableOpacity onPress={() => props?.onInfoActionClicked(data?.details)} style={{ position: "absolute", right: -10, top: 10, width: 35, height: 35, }}>
              <Image resizeMode="stretch" style={{ width: 20, height: 20 }} source={require("../../../../../assets/images/icons8-info-50.png")} />
            </TouchableOpacity>
          }
      </View>
      <NutritionViewChart nutritionInfo={data?.nutritionInfo || []}  sustainability={data?.sustainability} />
    </View>
  );
};

const DescriptionView = props => {
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      <View style={{ marginLeft: 5 }}>
         <Rating
          showRating
          onFinishRating={() => { }}
          style={{ paddingVertical: 0,  }}
          ratingCount={5}
          showReadOnlyText={false}
          startingValue={props?.overallRating}
          readonly={true}
          ratingColor="green"
          ratingBackgroundColor="#13a3cf"
          imageSize={25}
          showRating={true}
        
        />
      </View>
    </View>
  );
};

const NutritionViewChart = (props) => {
  const { nutritionInfo, sustainability } = props;
  const isNutrionalInfoPresent = nutritionInfo && nutritionInfo?.length > 0
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>

        {isNutrionalInfoPresent && (
          <View style={{ flex: 1 }}>
            {/* <Text style={{ marginTop: 10, fontWeight: "bold", color: "#6ecc78", fontSize: 20, alignSelf: "flex-start" }}>5.9</Text> */}
            <Text style={{ marginLeft: 0, fontWeight: "bold", color: "black", fontSize: 15, alignSelf: "center" }}>Healthy {props?.healthyRating}</Text>
          </View>
        )}


        <View style={{ flex: 1 }}>
          {/* <Text style={{ marginTop: 10, fontWeight: "bold", color: "#6ecc78", marginLeft: 10, fontSize: 20, alignSelf: "flex-end" }}>5.5</Text> */}
          <Text style={{ marginLeft: 10, fontWeight: "bold", color: "black", fontSize: 15, alignSelf:!isNutrionalInfoPresent ?  "flex-start" :"center"}}>Sustainablity {props?.sustainabilityRating}</Text>
        </View>
      </View>
      <View style={{ width: "90%", flexDirection: "row", marginLeft: 5,marginBottom:10 }}>
        {isNutrionalInfoPresent && (
          <View style={{ width: "50%", margin: 5 }}>
            {nutritionInfo.map((item) => {
              return <ProgressBar bgcolor={item?.color} completed={item?.value} title={item?.title} />
            })}
          </View>
        )}
      <View style={{ width: isNutrionalInfoPresent ? "50%" : "90%", margin: 5}}>
        {sustainability.map((item) => {
            return  <ProgressBar bgcolor={item?.color} completed={item?.value} title={item?.title} />
          })}
        </View>


        
      </View>
    </View>
  )

}


export default TypeInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15
  },
  title: {
    color: COLORS.LIGHT_COLOR,
  },
  gauge: {
    position: 'absolute',
    width: 88,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 20,
    fontWeight: "bold"
  },
});



const sampleData = [
  {
    id: 0,
    title: "Maggie",
    mainRating: 8.0,
    healthyRating: 8.8,
    sustainabilityRating: 5.6,
    imagePath: "",
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
import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../utility/colors';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE, FONT_XLARGE} from '../../../utility/textSize';
import Lottie from 'lottie-react-native';
import { VictoryPie,VictoryBar,VictoryChart,VictoryTheme } from "victory-native";
import PollutionPieChart from './VictoryPie'
import axios from 'axios'

const initialData = {
  count:0,
  place:"",
  time:"",
  color:"",
  type:"",
}



const PollutionDataView = (props) => {
  const [pollutionData,updatePollutionCount] = useState(initialData)

  const {place,time, count,color,type } = pollutionData;




  useEffect(() => {

    fetch('https://api.waqi.info/feed/Hyderabad/?token=8e880b956740c1a055c2023b6a293d6738b95a97')
  .then(response => response.json())
  .then(data =>  {
    console.log("KWhdkHDKH",data);
       
    const item = data?.data


    const requiredData = {
      count: item?.aqi,
      place: item?.city?.name || "",
      time: item.time.s,
      color: item?.aqi >= 150 ? "red" : (item?.aqi < 150 && item?.aqi > 50) ? "#fc9403" : "green",
      type: item?.aqi >= 150 ? "High" : (item?.aqi < 150 && item?.aqi > 50) ? "Moderate" : "Good",
    }

    updatePollutionCount(requiredData)
  })
  .catch(error => console.error(error));
  },[])

 



  return (
    <View style={{    backgroundColor: '#efefef'}} >
  
      <View  style={styles.container}>
          
        
      {/* <Lottie source={require("../../../assets/images/mask.json")} autoPlay={true} loop={true} onAnimationLoop style={{ width:"40%"}} /> */}
        <View style={{height:100,width:150,backgroundColor:color,justifyContent:"center",borderRadius:7,marginTop:15}}>
        <Text style={{ fontSize: 50, alignSelf: "center", fontWeight: "bold",color:"white", }}>{count}<Text style={{fontSize:19}}>AQI</Text></Text>
        {/* <Text style={{ fontSize: 25, alignSelf: "center", fontWeight: "bold", color:"white",marginBottom:10 }}>{place}</Text> */}
        </View>
        <View style={{justifyContent:"center",marginLeft:10}}>
        <Text style={{ fontSize: 25,  fontWeight: "bold", color:"black",marginTop:15 }}> {type} </Text>
        <Text  numberOfLines={3}  style={{ fontSize: 11, fontWeight: "bold", color:"gray",flexWrap:"wrap", flexWrap: 'wrap',width:"60%" }}>{place} </Text>
        <Text  numberOfLines={3}  style={{paddingTop:5, fontSize: 11, fontWeight: "bold", color:"gray",flexWrap:"wrap", flexWrap: 'wrap',width:"60%" }}>Hint :- please wear a mask today</Text>
        </View>
        <TouchableOpacity onPress={() => props?.onInfoActionClicked()} style={{ position: "absolute", right: 2, top: 25, width: 35, height: 35, }}>
              <Image resizeMode="stretch" style={{ width: 20, height: 20 }} source={require("../../../assets/images/icons8-info-50.png")} />
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius:10,
    margin: 10,
    height:140,
    flexDirection:"row",
    backgroundColor: 'white',
  },
  title: {
    fontSize: FONT_LARGE,
    color: COLORS.LIGHT_COLOR,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:80,
    height:80,
    backgroundColor: 'white',

  },
  allCommunities: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent:"center"
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: FONT_XLARGE,
    color: COLORS.APP_THEME_COLOR,
    fontWeight: FONT_WEIGHT_MAX,
  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default PollutionDataView;

import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FeedListCard} from '../dashboard/component/feedListView';
import BarChartView from './component/BarChartView';
import Activity from './component/Activity';
import {FONT_XLARGE} from '../../utility/textSize';
import {postCommentAction} from '../../redux/actions/getFeed';
import { MyReactNativeForm } from './component/CustomHeader';
import ShowModelInfo from '../../component/ItemModalView';
import {SHARE_ACTION} from '../dashboard/data/dummyData';
import PieChartView from './component/PieChartView';
import Modal from 'react-native-modal';
import axios from 'axios';

const ActivityID = {
  "Flight":"passenger_flight-route_type_domestic-aircraft_type_na-distance_na-class_na-rf_na",
  "Car": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
  "Van" :"freight_vehicle-vehicle_type_van-fuel_source_na-vehicle_weight_lte_3.5t-distance_uplift_included",
  "Electric" :"heat-and-steam-type_purchased"
}

const getActivityAction = (item) => {

  const{distance = 0,energy = 0,type} = item

  if(type == 0){
    return {
      activity: "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
      payload: {
        "distance": Number(distance),
        "distance_unit": "km"
      }
    }
  }
  else if (type == 1){
    return {
      activity: "passenger_flight-route_type_domestic-aircraft_type_na-distance_na-class_na-rf_na",
      payload: {
        "distance": Number(distance),
        "distance_unit": "km"
      }
    }
  }
  else if (type == 2){
    return {
      activity: "freight_vehicle-vehicle_type_van-fuel_source_na-vehicle_weight_lte_3.5t-distance_uplift_included",
      payload: {
        "distance": Number(distance),
        "distance_unit": "km"
      }
    }
  }
  else if (type == 3){
    return {
      activity: "heat-and-steam-type_purchased",
      payload: {
        "energy": Number(energy),
        "energy_unit": "kWh"
      }
    }
  }

}

export const COLOR_CODE = { 
  MEDIUM:"#ed9f40",
  HIGH:"#de667a",
  LOW:"#57c9a9"
}

const PieChartData = [
  { x: "CO2", y: 60 },
  { x: "NO2", y: 10 },
  { x: "CH4", y: 10 }
];

const BarChartData = [
  { x: "Week 1", y: 150 },
  { x: "Week 2", y: 250 },
  { x: "Week 3", y: 500 },
  { x: "Week 4", y: 750 },
  { x: "Week 5", y: 1000 }
];
//bgcolor, completed, title, imagePath 
const ActivityData = [
  { title: "Car", imagePath: require("../../assets/images/car.png"), bgcolor: COLOR_CODE.LOW , completed: 30 },
  { title: "Bus", imagePath: require("../../assets/images/bus.png"), bgcolor: COLOR_CODE.MEDIUM, completed: 60 },
  { title: "Van", imagePath: require("../../assets/images/van.png"), bgcolor: COLOR_CODE.HIGH, completed: 70 },
  { title: "Electric Appliance", imagePath: require("../../assets/images/electric.png"), bgcolor: COLOR_CODE.LOW, completed: 30 },
];




const Details = props => {
  const [pieChartData, updatePieChartData] = useState(PieChartData);
  const [barChartData, updateBarChartData] = useState(BarChartData);
  const [activityData, updateActivityData] = useState(ActivityData);
  const [emission, totalEmission] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  const onSubmit = async(item) => {
    let data = await getAPICallData(item);
    if (data?.constituent_gases) {


      let updatePieChartInfo = pieChartData;
      updatePieChartInfo[0].y =  updatePieChartInfo[0].y + Number(data?.constituent_gases?.co2) || updatePieChartInfo[0];
      updatePieChartInfo[1].y = updatePieChartInfo[1].y + Number(data?.constituent_gases?.co2)/2 || updatePieChartInfo[1];
      updatePieChartInfo[2].y = updatePieChartInfo[2].y + Number(data?.constituent_gases?.co2)/2 || updatePiupdatePieChartInfoeChartData[2];

      console.log("updatePieChartInfo",updatePieChartInfo);
      updatePieChartData(updatePieChartInfo);

      let updateBarChartInfo = barChartData;
      updateBarChartInfo[0].y = updateBarChartInfo[0].y + Number(data?.constituent_gases?.co2);
      setTimeout(() => {
        updateBarChartData(updateBarChartInfo)
      }, 2000);

    }

    let updateActivityInfo =  activityData;
    updateActivityInfo[item.type].completed = updateActivityInfo[item.type].completed < 100 ? updateActivityInfo[item.type].completed + 1 :updateActivityInfo[item.type].completed 
    updateActivityInfo[item.type].bgcolor =  updateActivityInfo[item.type].completed > 70 ? COLOR_CODE.HIGH :  updateActivityInfo[item.type].completed < 70 && updateActivityInfo[item.type].completed > 50 ? COLOR_CODE.MEDIUM :  COLOR_CODE.LOW
    updateActivityData(updateActivityInfo);
    setModalVisible(false);
  }

 const getAPICallData = (item) =>{
  console.log("item",item);

   const payloadInfo = getActivityAction(item)
   console.log("payloadInfo",payloadInfo);
    return axios.post('https://beta3.api.climatiq.io/estimate', {
      "emission_factor": {
        "activity_id":payloadInfo.activity
      },
      "parameters": {
        ...payloadInfo.payload
      }
    }, {
      headers: {
        Authorization: 'Bearer RJ563PWW3DM65MN97FNRDANNHJRC',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
      
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <ScrollView style={styles.container}>
      <Text onPress={() => setModalVisible(true)} style={{alignSelf:"flex-end",padding:5,marginTop:15,margin:5,color:"#d66785",borderWidth:1,borderColor:"#d66785"}}> ADD </Text>
            <PieChartView emission={emission} pieChartData = {pieChartData}/>
            <BarChartView  barChartData={barChartData} />
            <Activity activityData={activityData} />      
            <ModelViewScreen  modalVisible={modalVisible} setModalVisible={setModalVisible} onSubmit={onSubmit} />    
    </ScrollView>
  );
};




const ModelViewScreen = props => {
  
   const {modalVisible,setModalVisible} = props;
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={modalVisible}
     // onBackdropPress={() => setModalVisible(false)}
      style={styles.contentView}>
        <View style={{backgroundColor:"white",margin:0,borderRadius :15}}>
        <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",padding:10}}>Details</Text>

        <MyReactNativeForm onSubmit={props?.onSubmit} />
        </View>

    </Modal>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
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

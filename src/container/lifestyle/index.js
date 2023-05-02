import React,{useState} from 'react';
import {View, Text} from 'react-native';
import MapView from './component/MapView';
import PollutionDataView from './component/PollutionDataView';
import ShowModelInfo from '.././../component/ItemModalView';
import MyCarousel from './component/Carousal';

import SliderList from './component/SliderList';




const LifeStyleView = () => {
  const [isVisible,setModalVisible] = useState(false)
  return(
      <View style={{backgroundColor:"white"}}>
        <PollutionDataView onInfoActionClicked={() => {
           setModalVisible(true)        
        }}
        />
        <MapView updatePollution={(item) => {
           updatePollutionCount(item)
        }} />

        <View style={{height:10,backgroundColor:"#efefef"}}/>

        <SliderList />

        <ShowModelInfo
          data={plantData.details}
          modalVisible={isVisible}
          setModalVisible={isVisible => setModalVisible(isVisible)}
        />
        
      </View> 
  )
   
};

export default LifeStyleView;



const plantData = {
  "details": [
      {
          "title": "Banyan Tree",
          "imagePath":require("../../assets/images/Tree/banyan_tree.jpg"),
          type:"image",
          "description": [
              {
                  "title": "",
                  "Description": "The banyan tree is a versatile and valuable tree known for emitting a large amount of oxygen and having rich medicinal properties. Its unique photosynthesis process allows it to emit oxygen at night, and every part of the tree is useful for medicinal purposes. Additionally, the banyan tree is a symbol of resilience and stability, having survived through generations and adapted to various environments. Overall, planting banyan trees can be highly beneficial for the environment and living beings."
              }
          ]
      },
      {
          "title": "Neem Tree",
          "imagePath":require("../../assets/images/Tree/Neem_tree.jpg"),
          type:"image",
          "description": [
              {
                  "title": "",
                  "Description": "Neem trees are valuable medicinal plants that absorb carbon dioxide and emit a significant amount of oxygen, making them essential for maintaining clean air. They offer various health benefits and can act as natural pesticides. Neem is used in treating various illnesses, making it a versatile and magical plant. Planting neem trees, especially inside the house, can greatly improve air quality and provide a refreshing fragrance."
              }
          ]
      },
      {
          "title": "Peepal Tree",
          "imagePath":require("../../assets/images/Tree/peepal_tree.jpg"),
          type:"image",
          "description": [
              {
                  "title": "",
                  "Description": "Peepal tree, also known as sacred fig or religiosa, is a popular tree that emits oxygen at night and throughout the day, making it highly beneficial for the environment and living beings. Its leaves and bark have medicinal properties that can treat various ailments, and its bark can be used as a natural tooth cleaner. Peepal tree absorbs carbon dioxide and emits oxygen, ensuring clean air. Planting peepal trees can greatly improve the air quality in your surroundings and contribute to the environment."
              }
          ]
      },
      {
          "title": "Tulsi",
          "imagePath":require("../../assets/images/Tree/Tulsi.png"),
          type:"image",
          "description": [
              {
                  "title": "",
                  "Description": "Also known as the holy basil, tulsi is native to India. The leaves are used for treating serious illnesses such as asthma, cold, high blood pressure, cholesterol, common cold, fever, and flu. Tulsi is said to have stress-relieving qualities and anti-inflammatory properties. It can be used as a stress relaxant and inflammation controller. The holy basil comes in various forms and can both survive in sunlight and indoors owing to its unique properties.  Tulsi can be a great air purifier and supplier of fresh breathable air."
              }
          ]
      },
      {
          "title": "Snake Plant",
          "imagePath":require("../../assets/images/Tree/snake_plant.jpeg"),
          type:"image",
          "description": [
              {
                  "title": "",
                  "Description": "Snake plants, also known as mother-in-law's tongue, are indoor plants with upright leaves that can grow up to 3 feet high. They have the unique ability to absorb harmful materials from the air and produce oxygen, making them highly beneficial for creating a pure atmosphere, even at night. Snake plants are easy to maintain, requiring minimal watering and adding an aesthetic presence to your house. Keeping a snake plant indoors can greatly improve air quality and benefit your health."
              }
          ]
      }
  ]
}

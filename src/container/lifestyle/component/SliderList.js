import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import MyCarousel from './Carousal';

const MyComponent = () => {
    const renderItem = ({ item }) => (
        <MyCarousel data={item} />
    );

    return (
        <View style={{backgroundColor:"#efefef",marginVertical:5}}>
            <View style={{backgroundColor:"white"}}>
            <Text style={{margin :20,fontWeight:"bold",fontSize:20,backgroundColor:"white"}}>Eco News</Text>
            <FlatList
                data={SliderData}
                renderItem={renderItem}
            />
              </View>
        </View>

    );

};

export default MyComponent;

const SliderData  =
[
{
 
    "id": 0,
    "sliderInfoList": [
        {

            "id":0,
           "title":"Non Stick Cookware",
            "imagePath":require("../../../assets/images/cookware/Stick.png"),
            "description":"These are coated with Teflon. When these cookware heated release toxic chemicals, including PFOA( Perfluorootanoic Acid). PFOA can stay in the body for a long time and has been linked to cancer. The use of chemicals and energy-intensive processes in the manufacturing of cookware also contributes to air pollution and creates waste that may be difficult to recycle"
           
            },
        {
           
            "id":1,
           "title": "Aluminium Cookware",
            "imagePath":require("../../../assets/images/cookware/aluminium.png"),
            "description":"When heated slowly leached into food & gets deposited in body. Aluminium is Thyro toxic metal, it's deposition cause constipation, skin problems,  lack of energy, paralysis, liver problem, heart complication, brain disorders. The production of aluminium requires large amounts of water, generates significant amounts of waste materials, including red mud, a toxic byproduct of the refining process that can contaminate soil and water."
           
            },
            {
           
               "id":2,
              "title":"StainlessSteel Cookware",
               "imagePath":require("../../../assets/images/cookware/steel.png"),
              
               "description":"100% stainless steel is better choice but, some have coated with copper bottoms, some stainless steel has high nickel quanitity in them. Copper coated  reacts with foods, high nickel quantity in that which is toxic. The production of stainless steel results in significant greenhouse gas emissions, including carbon dioxide, nitrogen oxide, and sulfur dioxide. These emissions contribute to climate change and air pollution"
              
               },
               {
           
                   "id":3,
                  "title":"Ceramic Cookware",
                   "imagePath":require("../../../assets/images/cookware/cermaic.png"),
                   "description":"The main problem is that they are very expensive. Most availalbe in market, ceramic cookware are not more than its coating over aluminium"
                  
                   },
           
                   {
                       "id":4,
                      "title":"Copper cookware",
                       "imagePath":require("../../../assets/images/cookware/copper.jpg"),
                       "description":"Only minor problem is cooking may take some more time but retains most of food nutrients( more than 99%).Environmental impact is very less , easy available."
                      
                       }
    ]

}

]



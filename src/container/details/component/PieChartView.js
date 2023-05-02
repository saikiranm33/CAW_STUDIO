import React from 'react';
import {View, Text, Image, StyleSheet,Dimensions} from 'react-native';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';
import { VictoryPie,VictoryBar,VictoryChart,VictoryTheme } from "victory-native";
import LinearGradient from 'react-native-linear-gradient';

const graphicData = [
  { y: 10, x: '5%'},
  { y: 90, x: '90%'},
  { y: 50, x: '50%'},
  { y: 20, x: '20%'},
  { y: 70, x: '70%'}
  ]

  const graphicColor = ['red', 'blue', 'yellow', 'green', 'tomato']


const PieChartView = props => {
  return (
    <View style={styles.conatiner}>
       <Text style={{marginLeft:20,fontWeight:"bold",color:"black"}}>CO2 Emission</Text>
      <View style={styles.subContainer}>
        <VictoryPie
          data={props?.pieChartData}
          colorScale={["#4bccbb", "orange", "gold", "cyan", "navy"]}
          padAngle={({ datum }) => datum.y/10}
          innerRadius={50}
          animate={{
            duration: 5000
          }}
          width={250}
        >
        </VictoryPie>
        <Text style={{color:"gray",position:"absolute",left:85,top:80,fontWeight:"bold",fontSize:12}}>CO2 Emission</Text>
        <Text style={{color:"black",position:"absolute",left:90,top:105,fontWeight:"bold",fontSize:16}}>1.340 Kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'rgba(85, 237, 128 0.15)'
  },
  subContainer: {
    justifyContent:"center",
    marginTop:15,
  
    height:200,
     width:300,
     marginLeft: Dimensions.get('window').width/2 -  120,
  },
  title: {
    padding: 5,
    fontSize: FONT_LARGE,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subTitle: {
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginTop: 10,
  },
});

export default PieChartView;

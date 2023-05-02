import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';
import { VictoryAxis,VictoryBar,VictoryChart,VictoryTheme } from "victory-native";

const BarChartView = props => {
  return (
    <View style={styles.conatiner}>
      <Text style={{marginLeft:20,fontWeight:"bold",color:"black"}}>CO2 Statistic</Text>
      <VictoryChart
        responsive={false}
        animate={{
          duration: 200,
          onLoad: { duration: 200 }
        }}
        domainPadding={{ x: 10 }}
        theme={VictoryTheme.material}
        height={200}
      >
        <VictoryAxis />
        <VictoryBar
          barRatio={1}
          cornerRadius={0} // Having this be a non-zero number looks good when it isn't transitioning, but looks like garbage when it is....
          style={{ data: { fill: "#4bccbb" } }}
          alignment="middle"
          labels={d => d.y}
          data={props?.barChartData}
        />
      </VictoryChart>
    </View>
  );

};

const styles = StyleSheet.create({
  conatiner: {
    flex:1,
  },
  subContainer: {
    backgroundColor: 'white',
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
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default BarChartView;

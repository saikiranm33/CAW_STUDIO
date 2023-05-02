import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';


const graphicColor = ['rgb(0, 167, 83)', '#EFEFEF']; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

function PollutionPieChart() {
    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    useEffect(() => {
        setGraphicData(wantedGraphicData); // Setting the data that we want to display
    }, []);

    return (
        <View style={{}}>
            <VictoryPie
                animate={{ easing: 'exp' }}
                data={graphicData}
                width={400}
                height={200}
                colorScale={graphicColor}
                innerRadius={40}
                padAngle={5} //defines the padding between adjacent data slices
                endAngle={-100} //where pie angel should end
                startAngle={100} //where angel should start
            />
            <Text>62</Text>
        </View>
    );
}

export default PollutionPieChart;
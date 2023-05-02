import React from 'react';
import { View, Text } from 'react-native';

const ProgressBar = (props) => {
  const { bgcolor, completed, title } = props;
  const completedData = typeof completed == "number" ? completed: Number(completed)

  const containerStyles = {
    height: 16,
    width: "100%",
    backgroundColor: "#d6d2d5",
    borderRadius: 50,
    marginBottom: 2,
    flexDirection:"row"
  }

  const fillerStyles = {
    height: '100%',
    width: `${completedData}%`,
    backgroundColor: bgcolor,
    borderRadius: 50,
    textAlign: 'right',
    marginRight:40
  }

  const labelStyles = {
    padding: 1,
    color: 'white',
    fontWeight: 'bold',
    alignSelf:"center",
    fontSize:11
  }

  return (
      <View>
             <Text style={{ fontSize: 16,marginLeft: 5, color:"gray" }}>{title}</Text>
          <View style={containerStyles}>
              <View style={fillerStyles}>
                  <Text style={labelStyles}>{`${completedData}%`}</Text>
              </View>
          </View>
      </View>

  );
};

export default ProgressBar;
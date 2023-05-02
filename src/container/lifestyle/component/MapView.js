import React, { Component } from 'react';
import { StyleSheet, View, PermissionsAndroid, Image, Text } from 'react-native';
import axios from "axios";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import Permissions, { Permission, PermissionStatus, RESULTS, PERMISSIONS } from 'react-native-permissions';
//17.361302466978984, 78.47244087517403
const dummyMarkerData = [

  {
    "lat": 17.361302466978984,
    "lon": 78.47244087517403,
    "station": {
      "name": "Hyathnagar Organic Food",
    },
    "uid": 12810,
    type:"garbage"
  },
  {
    "lat": 17.443490576229927,
    "lon": 78.27445139236542,
    "station": {
      "name": "Uppal Organic Food",
    },
    "uid": 12810,
    type:"garbage"

  },
  {
    "lat": 17.445490576229927,
    "lon": 78.47445139236542,
    "station": {
      "name": "Hitech Dumping Yard",
    },
    "uid": 12810,
    type:"garbage"

  },
  {
    "lat": 17.543493330576229927,
    "lon": 78.57445139236542,
    "station": {
      "name": "Raidurg Dumping Yard",
    },
    "uid": 12810,
    type:"garbage"

  },
]


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerData: dummyMarkerData,
      currentLocation: { lat: 0, long: 0 }
    }
  }

  componentDidMount() {
    //this.requestLocationPermission();


    let sampleData = { "coords": { "accuracy": 20, "altitude": 431.6999816894531, "heading": 0, "latitude": 17.4161984, "longitude": 78.6088002, "speed": 0 }, "extras": { "networkLocationType": "wifi" }, "mocked": false, "timestamp": 1681907380555 }


    this.setupMarkers(sampleData);
  }

  setupMarkers = (locationProps) => {
    // {"coords": {"accuracy": 20, "altitude": 431.6999816894531, "heading": 0, "latitude": 17.4161984, "longitude": 78.6088002, "speed": 0}, "extras": {"networkLocationType": "wifi"}, "mocked": false, "timestamp": 1681907380555}
    const { coords = {} } = locationProps;
    axios({
      method: "GET",
      url: `https://api.waqi.info/v2/map/bounds?latlng=${coords?.latitude},${coords?.longitude},${coords?.latitude - 20.70},${coords?.longitude - 20.70}&networks=all&token=8e880b956740c1a055c2023b6a293d6738b95a97`,
      headers: {
        Accept: "application/json",
      },
    })
      .then(async(response) => {


        const updatedMarkerData = [...this.state.markerData,...response?.data?.data]


        
        this.setState({ markerData: updatedMarkerData })
      })
      .catch((error) => {
        console.log(error);
      });

  }

  requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted 123');

          Geolocation

          Geolocation.getCurrentPosition(position => {
            console.log('Current location:', position);
            this.setState(({ currentLocation: position.coords }))
            this.setupMarkers(position);
          },
            error => {
              console.log('Error getting location:', error);

//17.402234782962978, 78.48411127425237
              let sampleData = { "coords": { "accuracy": 20, "altitude": 431.6999816894531, "heading": 0, "latitude": 17.402234782962978, "longitude": 78.48411127425237, "speed": 0 }, "extras": { "networkLocationType": "wifi" }, "mocked": false, "timestamp": 1681907380555 }


              this.setupMarkers(sampleData);
            },
            {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000,
            },
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      Permissions.check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then((result) => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log('This feature is not available (on this device / in this context)');
              break;
            case RESULTS.DENIED:
              console.log('The permission has not been requested / is denied but requestable');
              request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
                if (result === RESULTS.GRANTED) {
                  Geolocation.getCurrentPosition(
                    position => {
                      console.log('Location permission granted position', position);
                    },
                    error => console.log(error),
                    { enableHighAccuracy: false, timeout: 50000, maximumAge: 1000 }
                  );
                }
              });
              break;
            case RESULTS.GRANTED:
              Geolocation.getCurrentPosition(
                position => {
                  console.log('Location permission granted position', position);
                },
                error => console.log(error),
                { enableHighAccuracy: false, timeout: 50000, maximumAge: 1000 }
              );
              break;
            case RESULTS.BLOCKED:
              console.log('The permission is denied and not requestable anymore');
              break;
          }
        })
        .catch((error) => {
          // …
        });
    }
  };


  // Get the current location

//17.403314486773258, 78.48655730287027

  render() {
    const markers = this.state.markerData || [];
    console.log("markers",markers)
    return (
      <View style={{marginBottom:5}}>
        <View style={{height:40,justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:16,paddingLeft:10}}>Environment Map</Text>
                </View>

        <View style={styles.container}>

          <MapView
            minZoomLevel={10}
            style={styles.map}
            initialRegion={{
              latitude: 17.403314486773258 || 17.429179159612353,
              longitude: 78.48655730287027  || 78.36884332295364,
              latitudeDelta: 2.9922,
              longitudeDelta: 2.1421,
            }}
            annotations={markers}
            zoomControlEnabled={true}
            
          >
            {this.state.markerData &&
              this.state.markerData.map((item, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.lat,
                    longitude: item.lon,
                  }}
                  title={item.station.name}
                  description={item.type ="green" ? item.station.name  : item.aqi}
                  pinColor={ item.type ="green" ? item.aqi > 150 ? "red" : item.aqi <= 150 && item.aqi > 50 ? "red" : "green" : "red"} // any color
                >

                  {item.type !== "green" ? 
                  
                  <View style={{}}>
                  <Image source={require('../../../assets/images/pin.png')} style={{ height: 50, width: 40 }} />
                    <View style={{ backgroundColor: item.aqi > 100 ? "red" : item.aqi <= 100 && item.aqi > 70 ? "#fc7b03" : "green", position: "absolute", top: 0, left: 0, right: 0, width: 40, height: 30, borderWidth: 1, borderColor: "white" }}>
                      <Text style={{ fontSize: 18, color: "white", textAlign: "center", fontWeight: "900" }}>{item.aqi || 0}</Text>
                    </View>
                  </View>

                  :
                  <Image source={require('../../../assets/images/organic.png')} style={{ height: 30, width: 30 }} />

                
                }

                </Marker>
              ))}

          </MapView>
        </View>
        <View style={{ margin: 10,flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require('../../../assets/images/pin.png')} style={{ height: 50, width: 40 }} />
            <View style={{ backgroundColor: "red", position: "absolute", top: 0, left: 0, right: 0, width: 40, height: 30, borderWidth: 1, borderColor: "white" }}>
              <Text style={{ fontSize: 18, color: "white", textAlign: "center", fontWeight: "900" }}>{0}</Text>
            </View>
            <Text style={{ alignSelf: "center", marginLeft: 10 }}>Pollution</Text>
          </View>
          <View style={{ flexDirection: "row",marginLeft:5 }}>
          <Image source={require('../../../assets/images/organic.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ alignSelf: "center", marginLeft: 10 }}>Organic Centers</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
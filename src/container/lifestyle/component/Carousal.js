import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Image
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel'

export default class MyCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: props?.data
        }
    }

    _renderItem({ item, index }) {
        return (
            <View key={index} style={{
                backgroundColor: '#efefef',
                borderRadius: 5,
                height: 220
            }}>
                <Image resizeMode="contain" resizeMethod="resize" source={item?.imagePath} style={{ width: "100%", height: "100%", alignSelf: "center" }} />
            </View>
        )
    }
    render() {
        console.log("Activity", this.props?.data?.sliderInfoList)
        const sliderList = this.props?.data?.sliderInfoList
        return (
            <SafeAreaView style={{ flex: 1}}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={sliderList || []}
                        sliderWidth={400}
                        itemWidth={400}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                    <Pagination
                        dotsLength={sliderList.length}
                        activeDotIndex={this.state.activeIndex}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(0, 0, 0, 0.92)',
                            marginTop:0 
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                <View style={{ marginHorizontal: 10, maxHeight: 80, marginBottom: 20,marginTop:-20 }}>
                    <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: "bold" }}>{sliderList?.[this.state.activeIndex]?.title}</Text>
                    <Text style={{ fontSize: 14, marginHorizontal: 10 }}>{sliderList?.[this.state.activeIndex]?.description}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

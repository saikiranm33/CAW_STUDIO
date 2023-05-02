import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Video from 'react-native-video';


function VideoScreen(props) {  
    const [isPlaying, setIsPlaying] = React.useState(false);  
    const [isMuted, setIsMuted] = React.useState(false);  

    const togglePlaying = () => {};  

    return (  
        <View>  
            <Video
               source={{ uri: props?.data?.videoUrl}}
                paused={false}  
                controls={true}  
                style={{width:"100%",height:250}}  
                muted={isMuted}  
            />  
        </View> 
    );  
}
export default VideoScreen;

import React from 'react';
import {View}  from 'react-native'
import { WebView } from 'react-native-webview';

function MapView() {
  const script = `
  (function(w,d,t,f){  w[f]=w[f]||function(c,k,n){s=w[f],k=s['k']=(s['k']||(k?('&k='+k):''));s['c']=  
  c=(c  instanceof  Array)?c:[c];s['n']=n=n||0;L=d.createElement(t),e=d.getElementsByTagName(t)[0];  
  L.async=1;L.src='//feed.aqicn.org/feed/'+(c[n].city)+'/'+(c[n].lang||'')+'/feed.v1.js?n='+n+k;  
  e.parentNode.insertBefore(L,e);  };  })(  window,document,'script','_aqiFeed'  );    
  `;

  return (
      <View style={{height:300,width:"100%"}}>
    <WebView
      source={{ html: `<div id="map" style="height: 600px;"></div>
                        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
                        <script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
                        <script>${script}</script>` }}
    />
    </View>
  );
}


export default MapView
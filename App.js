import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AVPlaybackStatus, Video, VideoReadyForDisplayEvent } from 'expo-av'

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "https://storage.googleapis.com/social-24b7f.appspot.com/post-image-video/040a9b9e-f910-40cb-b654-ecbf6c6ad7a5.mp4"
        }}
        resizeMode="contain"
        isMuted={false}
        style={{width: 200, height: 200}}
        useNativeControls
        onError={(error: string)=>{
          console.log("Asdfasf", error)
        }}
        onLoadStart={()=>{console.log("load start")}}
        ref={this.video}
        onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
          console.log("start here", status)
        }}
        onReadyForDisplay={(event: VideoReadyForDisplayEvent) => {
          console.log("start here")
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.center}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'black',
        }}>
        <Image
          source={require('./assets/phone-call.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

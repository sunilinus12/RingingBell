import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.center}>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#4C28BA',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <Image
          source={require('./assets/phone-call.png')}
          style={{
            width: '35%',
            height: '35%',
            resizeMode: 'contain',
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

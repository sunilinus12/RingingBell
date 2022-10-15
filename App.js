import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView} from '@motify/components';
import {Easing} from 'react-native-reanimated';

export default function App() {
  return (
    <View style={styles.center}>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#6E01EF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}>
        {Array(3)
          .fill('')
          .map((item, key) => {
            return (
              <MotiView
                key={key}
                transition={{
                  duration: 2000,
                  type: 'timing',
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  delay: key * 200,
                  repeatReverse: false,
                }}
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    width: 80,
                    height: 80,
                    backgroundColor: '#6E01EF',

                    borderRadius: 50,
                  },
                ]}
                from={{opacity: 0.7, scale: 1}}
                animate={{opacity: 0, scale: 4}}
              />
            );
          })}
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

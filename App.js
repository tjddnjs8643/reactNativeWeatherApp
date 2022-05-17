/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('screen').width;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={styles.container} >
      <StatusBar translucent barStyle="light-content" />
      <View style={styles.city}>
        <Text style={styles.cityName}>seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator= {false}
        contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}> sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}> sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}> sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}> sunny</Text>
        </View>
      </ScrollView>
      
      
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato"
  },
  city: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: "center"
  },
  cityName: {
    color: 'black',
    fontSize: 68,
    fontWeight: "500"
  },
  weather: {
    // backgroundColor:'teal'
  },
  day: {
    width: windowWidth,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 200,
    fontWeight: "600"
  },
  description: {
    marginTop: -40,
    fontSize: 60,
    alignItems: 'flex-start'
  }
});

export default App;

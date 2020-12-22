import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/welcome/WelcomeScreen';
import { ProgressScreen } from '../screens/progress/ProgressScreen';
import { ResultScreen } from '../screens/result/ResultScreen';

export const Routing = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator
    headerMode="screen"
    screenOptions={{
      headerShown: false
    }}>
      <stack.Screen name="welcome" component={WelcomeScreen} />
      <stack.Screen name="progress" component={ProgressScreen} />
      <stack.Screen name="result" component={ResultScreen} />
    </stack.Navigator>
  );
};
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { ProgressScreen } from "../screens/progress/ProgressScreen";
import { ResultScreen } from "../screens/result/ResultScreen";
import { TouchableOpacity, View } from "react-native";
import { ExitSvg } from "../library/assets/svg/ExitSvg";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../library/intex";
import { SelectDifficultyScreen } from "../screens/welcome/SelectDifficultyScreen";

const ExitButton = ({ color }: { color: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.5}
      onPress={() => navigation.navigate("welcome")}
      style={{ marginRight: 30 }}
    >
      <ExitSvg color={color} />
    </TouchableOpacity>
  );
};

export const Routing = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="welcome" component={WelcomeScreen} />
      <stack.Screen
        name="selectDifficulty"
        component={SelectDifficultyScreen}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
          headerLeft: () => null,
          headerRight: () => <ExitButton color={"#fff"} />,
        }}
      />
      <stack.Screen
        name="progress"
        component={ProgressScreen}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
          headerLeft: () => null,
          headerRight: () => <ExitButton color={Colors.primary} />,
        }}
      />
      <stack.Screen
        name="result"
        component={ResultScreen}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
          headerLeft: () => null,
          headerRight: () => <ExitButton color={"#fff"} />,
        }}
      />
    </stack.Navigator>
  );
};

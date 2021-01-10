import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, NativeModules } from "react-native";
import { Button, Colors, Input } from "../../library/intex";
import { BiometricModule } from "../../library/native/BiometricModule";
import { CalendarModule } from "../../library/native/CalendarModule";
import { WelcomeBackground } from "../welcome/components/WelcomeBackground";

export const TestScreen = () => {
  const navigator = useNavigation();

  const biometricAuthentication = () => {
    BiometricModule.scanner(
      'You are logging into Trivia',
      'Confirm that you want to login',
      'Cancel',
      ()=> {
        console.log('login success');
        navigator.navigate('welcome');
      }
      );
  }

  const nativeCalendarHandler = async () => {

    //message
    CalendarModule.showMessage('Test native toast...');

    // promise
    try {
      const eventId = await CalendarModule.promiseEvent('Promise');
      console.log(`(Promise event) ${eventId} returned`);
    } catch (e) {
      console.error(e);
    }


    // callback
    CalendarModule.callbackEvent('Callback', (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`);
        }
        console.log(`(Callback event) ${eventId} returned`);
      })
  };

  return (
    <WelcomeBackground>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
        style={{marginBottom: 20}}
          caption={"Biometric"}
          gradient={["#FFA67A", "#FF6065"]}
          gradientShadow={"#C65252"}
          primary
          onPress={()=> biometricAuthentication()}
        />

        <Button
          caption={"Android Calendar element"}
          gradient={["#FFA67A", "#FF6065"]}
          gradientShadow={"#C65252"}
          primary
          onPress={()=> nativeCalendarHandler()}
        />
        </View>
    </WelcomeBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

});

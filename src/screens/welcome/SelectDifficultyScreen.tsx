import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { OKSvg } from '../../library/assets/svg/OKSvg';
import { SelectItem } from './components/SelectItem';
import { WelcomeBackground } from './components/WelcomeBackground';

export const SelectDifficultyScreen = () => {

  const route = useRoute();

  const [difficulty, setDifficulty] = useState(null);

  const navigator = useNavigation();

  useEffect(() => {
    const params: any = route.params;
    if (params && params['difficulty']) {
      setDifficulty(params['difficulty'])
    }
  }, [route.params])

  const selectItem = (value: string) => {
    navigator.navigate('welcome', { difficulty: value });
  }

  return (
    <WelcomeBackground>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
        enabled>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>

            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Select difficulty level</Text>
            </View>

            <SelectItem
              value={'easy'}
              icon={'easy' === difficulty ? <OKSvg /> : null}
              onSelect={(value) => { selectItem(value) }} />

            <SelectItem
              value={'hard'}
              icon={'hard' === difficulty ? <OKSvg /> : null}
              onSelect={(value) => { selectItem(value) }} />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </WelcomeBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerContainer: {
    marginTop: 120,
    marginBottom: 40
  },

  headerText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 33,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white'
  },
});

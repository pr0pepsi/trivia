import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../library/intex';
import { setQuestions } from '../../redux/game/actions';
import { Question } from '../../redux/game/types';
import { CupSvg } from './assets/svg/CupSvg';
import { LogoSvg } from './assets/svg/LogoSvg';
import { StarSvg } from './assets/svg/StarSvg';

export const WelcomeScreen = () => {

  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState(10);

  const dispatch = useDispatch();
  const navigator = useNavigation();

  useEffect(() => {
    // setupGame('easy', 10);
  }, []);

  const setupGame = async () => {
    const result: Question[] = await getQuestionsFromApi('easy', 10);
    await dispatch(setQuestions(result));
    navigator.navigate('progress');
  }

  const getQuestionsFromApi = async (difficulty: string, amount: number) => {
    const link = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`
    return await fetch(link)
      .then((response) => response.json())
      .then((json) => {
        return json.results;
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior="padding"
        enabled>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Welcome to the</Text>
              <LogoSvg style={{ marginTop: -40 }} />
            </View>

            <Input
              value={difficulty}
              setValue={setDifficulty}
              textLabel={'Difficulty'}
              imageLabel={<CupSvg />} />
            <Input
              keyboardType={"decimal-pad"}
              style={{ marginVertical: 25 }}
              value={amount.toString()}
              setValue={setAmount}
              textLabel={'Amount'}
              imageLabel={<StarSvg />}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>

      <SafeAreaView>
        <Button
          caption={'True'}
          gradient
          primary
          onPress={setupGame} />
      </SafeAreaView>
    </View>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4953BE',
    paddingHorizontal: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerContainer: {
    marginTop: 80
  },

  content: {
    flex: 1,
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
  }

});

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Button, Colors, Input } from '../../library/intex';
import { setQuestions } from '../../redux/game/actions';
import { Question } from '../../redux/game/types';
import { CupSvg } from './assets/svg/CupSvg';
import { LogoSvg } from './assets/svg/LogoSvg';
import { StarSvg } from './assets/svg/StarSvg';
import { WelcomeBackground } from './components/WelcomeBackground';

export const WelcomeScreen = () => {

  const route = useRoute();

  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState(10);

  const dispatch = useDispatch();
  const navigator = useNavigation();

  useEffect(() => {
    const params: any = route.params;
    if (params && params['difficulty']) {
      setDifficulty(params['difficulty'])
    }
  }, [route.params])

  const setupGame = async () => {
    const result: Question[] = await getQuestionsFromApi(difficulty, amount);
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
              <Text style={styles.headerText}>Welcome to the</Text>
              <LogoSvg style={{ marginTop: -40 }} />
            </View>

            <Input
              selectItem
              onPress={() => navigator.navigate('selectDifficulty', { difficulty })}
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <SafeAreaView>
        <Button
          style={Platform.OS === 'android' && { marginBottom: 20 }}

          caption={'Play'}
          gradient={['#FFA67A', '#FF6065']}
          gradientShadow={'#C65252'}
          primary
          onPress={setupGame} />
      </SafeAreaView>
    </WelcomeBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerContainer: {
    marginTop: 120
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

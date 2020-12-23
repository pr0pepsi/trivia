import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../library/intex';
import { ResultBackground } from './components/ResultBackground';
import { HeaderResult } from './components/HeaderResult';
import { StoreState } from '../../redux/intex';
import { ResultItem } from './components/ResultItem';

export const ResultScreen = () => {

  const questions = useSelector((state: StoreState) => state.game.questions);
  const results = useSelector((state: StoreState) => state.game.results);


  const navigator = useNavigation();

  const correctAnswerAmount = (): number => {
    const items = results.filter(a => a === true);
    return items.length;
  }

  const playAgain = async () => {
    navigator.navigate('welcome');
  }

  return (
    <ResultBackground>

      <View style={styles.container}>
        <HeaderResult style={{ marginTop: 100 }} correct={correctAnswerAmount()} length={questions.length} />

        {questions && <FlatList
          style={styles.list}
          data={questions}
          renderItem={({ item, index }) => <ResultItem question={item.question} isCorrect={results[index]} />}
          keyExtractor={item => item.question}
        />}

      </View>

      <SafeAreaView>
        <Button
          caption={'Play Again'}
          gradient={['#FFA67A', '#FF6065']}
          gradientShadow={'#C65252'}
          primary
          onPress={playAgain} />
      </SafeAreaView>
    </ResultBackground>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  list: {
    flex: 1,
    width: '100%',
    marginVertical: 20
  }
});
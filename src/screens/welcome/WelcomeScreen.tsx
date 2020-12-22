import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../../redux/game/actions';
import { Question } from '../../redux/game/types';

export const WelcomeScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // setupGame('easy', 10);
  }, []);

  const setupGame = async (difficulty: 'easy'| 'hard' , amount: number) => {
    const result: Question[] = await getQuestionsFromApi(difficulty, amount);
    dispatch(setQuestions(result))
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
    <SafeAreaView>
        <Text>WelcomeScreen</Text>
    </SafeAreaView>
  );
};

import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Colors } from "../../library/intex";
import { StoreState } from "../../redux/intex";
import { AnswerSection } from "./components/AnswerSection";
import { ProgressBackground } from "./components/ProgressBackground";
import { ProgressBar } from "./components/ProgressBar";

import { useNavigation } from "@react-navigation/native";
import { addQuestionResult } from "../../redux/game/actions";

export const ProgressScreen = () => {
  const questions = useSelector((state: StoreState) => state.game.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const dispatch = useDispatch();
  const navigator = useNavigation();

  const selectAnswer = (answer: string) => {
    const result = answer === questions[currentQuestion].correct_answer;

    dispatch(addQuestionResult(result));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion === questions.length) {
      navigator.navigate("result");
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <ProgressBackground>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {questions[currentQuestion].category}
            </Text>
            <Text style={styles.levelText}>{"level 1"}</Text>
          </View>

          <ProgressBar
            style={styles.progressBar}
            current={currentQuestion}
            length={questions.length}
          />

          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>

          <AnswerSection
            style={{ marginTop: 50 }}
            onSelect={selectAnswer}
            type={questions[currentQuestion].type}
          />
        </View>
      </ScrollView>
    </ProgressBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  headerContainer: {
    alignItems: "center",
    marginTop: 120,
    minHeight: 120,
  },

  headerText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 31,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 39,
    letterSpacing: 0.05,
    textAlign: "center",
    color: Colors.primary,
  },
  levelText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "lowercase",
    color: Colors.primary,

    marginTop: 15,
  },

  questionText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 36,
    color: Colors.primary,
    marginTop: 30,
  },

  progressBar: {
    marginTop: 30,
    marginBottom: 20,
  },
});

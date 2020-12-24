import React, { useState, useEffect } from "react";
import { StyleSheet, View, ViewStyle, Text } from "react-native";
import { ExitSvg } from "../../../library/assets/svg/ExitSvg";
import { OKSvg } from "../../../library/assets/svg/OKSvg";
import { Colors } from "../../../library/intex";

export interface ResultItemProps {
  question: string;
  isCorrect: Boolean;
}

export const ResultItem = ({ question, isCorrect }: ResultItemProps) => {
  const backgroundColor = isCorrect ? "#FFFBFA" : "#FFDBDB";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{question}</Text>
      {isCorrect ? <OKSvg /> : <ExitSvg />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 50,
    paddingHorizontal: 20,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
  },

  text: {
    flex: 1,
    fontFamily: "Quicksand-Regular",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 15,
    color: "#464FAC",

    marginRight: 10,
  },
});

import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button } from "../../../library/intex";

export interface AnswerSectionProps {
  onSelect: Function;
  type: string;
  style?: ViewStyle | ViewStyle[];
}

export const AnswerSection = ({
  onSelect,
  type,
  style,
}: AnswerSectionProps) => {
  let result = null;

  if (type === "boolean") {
    result = (
      <>
        <Button
          style={{ width: "100%" }}
          caption={"True"}
          primary
          onPress={() => onSelect("True")}
        />

        <Button
          style={{ marginTop: 8 }}
          caption={"False"}
          primaryLight
          onPress={() => onSelect("False")}
        />
      </>
    );
  }

  return <View style={[styles.container, style]}>{result}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

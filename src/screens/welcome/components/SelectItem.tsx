import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";

export interface SelectItemProps {
  value: string;
  icon?: any;
  onSelect: (value: string) => any;
}

export const SelectItem = ({ value, icon, onSelect }: SelectItemProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.5}
      onPress={() => onSelect(value)}
      style={[styles.container]}
    >
      <Text style={styles.text}>{value}</Text>
      {icon}
    </TouchableOpacity>
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
    backgroundColor: "#FFFBFA",
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

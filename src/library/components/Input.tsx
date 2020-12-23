import React, {Component, useEffect, useRef, useState} from 'react';
import { TextInputProps } from 'react-native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { color } from 'react-native-reanimated';

interface InputProps extends TextInputProps {
  value: string;
  setValue: Function;
  textLabel: string;
  imageLabel: any;
  style?: ViewStyle | ViewStyle[];
}

export const Input = (props: InputProps) => {
    const {textLabel,imageLabel,value,setValue,style, ...restProps } = props;

  return (
    <View style={[styles.container, style]}>
        <View style={styles.labelContainer}>
            <View style={styles.imageLabel}>
                {imageLabel}
            </View>
            <Text style={[styles.text, styles.label]}>{textLabel}</Text>
        </View>
        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          style={[styles.input, styles.text]}
          {...restProps}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center'
  },
  label: {
    color: '#F7A491',
    textTransform: 'none',
    fontWeight: '700',
  },
  imageLabel: {
    marginRight:10,
  },

  input: {
    paddingHorizontal:15,
    borderWidth: 1,
    borderRadius: 14,
    height:54,
    textAlignVertical: 'center',
    borderColor: '#ffffff',
  },

  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 19.5,
    textTransform: 'lowercase',
    color: '#ffffff',
  }

});

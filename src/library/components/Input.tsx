import React, { } from 'react';
import { TextInputProps } from 'react-native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowDownSvg } from '../assets/svg/ArrowDownSvg';

interface InputProps extends TextInputProps {
  value: string;
  setValue: Function;
  textLabel: string;
  imageLabel: any;
  selectItem?: boolean;
  onPress?: () => any;
  style?: ViewStyle | ViewStyle[];
}

export const Input = (props: InputProps) => {
  const { textLabel, imageLabel, value, setValue, style, selectItem, onPress, ...restProps } = props;

  let item = <TextInput
    onChangeText={(text) => setValue(text)}
    value={value}
    style={[styles.input, styles.text]}
    {...restProps}
  />

  if (selectItem) {
    item = (
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.8}
        onPress={onPress}
      >

        <TextInput
          onChangeText={(text) => setValue(text)}
          value={value}
          editable={false}
          style={[styles.input, styles.text]}
          {...restProps} />
        <ArrowDownSvg style={styles.selectItem} />
      </TouchableOpacity>

    )
  }

  return (
    <View style={[styles.container, style]}>
        <View style={styles.labelContainer}>
            <View style={styles.imageLabel}>
                {imageLabel}
            </View>
            <Text style={[styles.text, styles.label]}>{textLabel}</Text>
        </View>

      {item}

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
    justifyContent: 'space-between'
  },

  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 19.5,
    textTransform: 'lowercase',
    color: '#ffffff',
  },

  selectItem: {
    position: 'absolute',
    right: 20,
    top: 25,

  }

});

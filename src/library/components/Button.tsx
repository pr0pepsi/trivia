import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../styles';

export interface ButtonProps {
  caption: string;
  /* colors */
  gradient?: string[];
  gradientShadow?: string;
  primary?: boolean;
  primaryLight?: boolean;
  onPress: (e?: any) => void;
  style?: any;
  captionStyle?: any;
}

export const Button = ({
  caption,
  onPress,
  primary,
  primaryLight,
  style,
  captionStyle,
  gradient,
  gradientShadow
}: ButtonProps) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  const captionStyles: TextStyle[] = [styles.caption];

  if (primary) {
    buttonStyles.push(styles.backgroundPrimary);
    captionStyles.push(styles.captionPrimary);
  } else if (primaryLight) {
    buttonStyles.push(styles.backgroundPrimaryLight);
    captionStyles.push(styles.captionPrimaryLight);
  }


  if (captionStyle) {
    captionStyles.push(captionStyle);
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, style]}
    >

      { gradient
        ? <LinearGradient
          colors={gradient}
          style={buttonStyles}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}>
            <Text style={captionStyles}>{caption}</Text>
          </LinearGradient>
        : <View style={buttonStyles}>
            <Text style={captionStyles}>{caption}</Text>
          </View>}

      
      {primary && <View style={[styles.shadow, gradient && { backgroundColor: gradientShadow }]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 14,
    height: 64,
    zIndex:2
  },

  caption: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22.48,
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  shadow: {
    backgroundColor: Colors.primaryDark,
    borderRadius: 14,
    marginTop: -64,
    height: 70,
    zIndex:1
  },

  backgroundPrimary: {
    backgroundColor: Colors.primary,
  },
  backgroundPrimaryLight: {
    backgroundColor: '#ffffff',
    borderColor: Colors.primary,
    borderWidth: 3
  },

  captionPrimary: {
    color: '#ffffff'
  },
  captionPrimaryLight: {
    color: '#4953BE'
  },
});

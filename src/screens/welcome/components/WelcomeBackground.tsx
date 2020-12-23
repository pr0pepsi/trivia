import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../library/intex';
import { BGW1Svg } from '../assets/svg/BGW1Svg';
import { BGW2Svg } from '../assets/svg/BGW2Svg';
import { BGW3Svg } from '../assets/svg/BGW3Svg';
import { BGW4Svg } from '../assets/svg/BGW4Svg';

export interface WelcomeBackgroundProps {
    children?: JSX.Element | JSX.Element[];
}

export const WelcomeBackground = ({ children }: WelcomeBackgroundProps) => {

    return (
        <View style={styles.background}>
            {children}
            <BGW1Svg style={styles.element1} />
            <BGW2Svg style={styles.element2} />
            <BGW3Svg style={styles.element3} />
            <BGW4Svg style={styles.element4} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 30
    },
    element1: {
        zIndex: -1,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    element2: {
        zIndex: -1,
        position: 'absolute',
        right: 0,
        top: 0
    },
    element3: {
        zIndex: -1,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    element4: {
        zIndex: -1,
        position: 'absolute',
        left: 0,
        bottom: 0,
    }
});

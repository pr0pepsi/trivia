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
            <BGW1Svg style={[styles.svg, styles.topLeft]} />
            <BGW2Svg style={[styles.svg, styles.topRight]} />
            <BGW3Svg style={[styles.svg, styles.bottomRight]} />
            <BGW4Svg style={[styles.svg, styles.bottomLeft]} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 30
    },
    svg: {
        zIndex: -1,
        position: 'absolute',
    },
    topLeft: {
        left: 0,
        top: 0,
    },
    topRight: {
        right: 0,
        top: 0
    },
    bottomRight: {
        right: 0,
        bottom: 0
    },
    bottomLeft: {
        left: 0,
        bottom: 0,
    }
});

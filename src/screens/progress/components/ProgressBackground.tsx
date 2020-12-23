import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../library/intex';
import { BGP1Svg } from '../assets/svg/BGP1Svg';
import { BGP2Svg } from '../assets/svg/BGP2Svg';
import { BGP3Svg } from '../assets/svg/BGP3Svg';
import { BGP4Svg } from '../assets/svg/BGP4Svg';


export interface ProgressBackgroundProps {
    children?: JSX.Element | JSX.Element[];
}

export const ProgressBackground = ({ children }: ProgressBackgroundProps) => {

    return (
        <View style={styles.background}>
            {children}
            <BGP1Svg style={styles.element1} />
            <BGP2Svg style={styles.element2} />
            <BGP3Svg style={styles.element3} />
            <BGP4Svg style={styles.element4} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ffffff',
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

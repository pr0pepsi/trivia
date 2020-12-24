import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../library/intex';
import { BGP1Svg } from '../assets/svg/BGP1Svg';
import { BGP2Svg } from '../assets/svg/BGP2Svg';
import { BGP3Svg } from '../assets/svg/BGP3Svg';
import { BGP4Svg } from '../assets/svg/BGP4Svg';
import { BGP5Svg } from '../assets/svg/BGP5Svg';
import { BGP6Svg } from '../assets/svg/BGP6Svg';


export interface ProgressBackgroundProps {
    children?: JSX.Element | JSX.Element[];
}

export const ProgressBackground = ({ children }: ProgressBackgroundProps) => {

    return (
        <View style={styles.background}>
            {children}
            <BGP1Svg style={[styles.svg, styles.topLeft]} />
            <BGP2Svg style={[styles.svg, styles.topRight]} />
            <BGP3Svg style={[styles.svg, styles.bottomRight]} />
            <BGP4Svg style={[styles.svg, styles.bottomRight]} />
            <BGP5Svg style={[styles.svg, styles.bottomLeft]} />
				<BGP6Svg style={[styles.svg, styles.bottomLeft, { zIndex: -2 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ffffff',
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

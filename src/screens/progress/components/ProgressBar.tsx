import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { Colors } from '../../../library/intex';

export interface ProgressBarProps {
    current: number;
    length: number;
    style?: ViewStyle | ViewStyle[];
}

export const ProgressBar = ({ current, length, style }: ProgressBarProps) => {

    const percentage = (current + 1) / length * 100;
    const barWidth = `${percentage}%`

    return (
        <View style={[styles.container, style]}>
            <View style={styles.textContainer}>
                <Text style={styles.textCurrent}>{current + 1}</Text>
                <Text style={styles.sleshText}>/</Text>
                <Text style={styles.textLength}>{length}</Text>
            </View>
            <View style={styles.bar} />
            <View style={[styles.activeBar, { width: barWidth }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    bar: {
        backgroundColor: '#DBDEFF',
        borderRadius: 20,
        height: 5
    },
    activeBar: {
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        height: 5,
        marginTop: -5
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10
    },
    textCurrent: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 25,
        color: Colors.secondary,
    },
    textLength: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 17.5,
        color: Colors.primary,
    },
    sleshText: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 18,
        color: Colors.primary,
        fontWeight: '700',
        marginHorizontal: 2
    }

});
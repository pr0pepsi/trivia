import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import { Colors } from '../../../library/intex';
import { AvatarSvg } from '../assets/svg/AvatarSvg';

export interface HeaderResultProps {
    correct: number;
    length: number;
    style?: ViewStyle | ViewStyle[];
}

export const HeaderResult = ({ correct, length, style }: HeaderResultProps) => {

    const percentage = (correct / length * 10);

    return (
        <View style={[styles.container, style]}>
            <View style={styles.infoContainer}>
                <View style={styles.circle}>
                    <AvatarSvg />
                </View>
                <View style={styles.textContainer}>

                    <Text style={styles.textInfo}>You scored</Text>
                    <Text style={styles.textCurrent}>{correct}</Text>
                    <Text style={styles.sleshText}>/</Text>
                    <Text style={styles.textLength}>{length}</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    infoContainer: {
        flexDirection: 'row'
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFBFA',
        marginRight: 15
    },
    textInfo: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 20,
        color: '#fff',

        marginRight: 20
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
        color: '#fff',
    },
    sleshText: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
        marginHorizontal: 2
    }

});
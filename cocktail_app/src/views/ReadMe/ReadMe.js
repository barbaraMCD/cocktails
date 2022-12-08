import React from "react"
import {Image, Text, TouchableHighlight, View} from 'react-native'
import { SafeAreaView } from "react-native"
import styles from './ReadMe.style'

const ReadMe = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Read me</Text>
            <View style={styles.sectionContainer}>
                <Text>G'SOIF</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text>Used technologie</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text>Our dev team</Text>
            </View>
        </SafeAreaView>
    )
}

export default ReadMe
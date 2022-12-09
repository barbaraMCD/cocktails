import React from "react"
import {Image, Text, TouchableHighlight, View} from 'react-native'
import { SafeAreaView } from "react-native"
import styles from './ReadMe.style'
import react from '../../assets/images/react-native-logo.png'

const ReadMe = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Read me</Text>
            <View style={styles.sectionContainer}>
                <Text>G'SOIF</Text>
                <Text style={styles.text}>G'SOIF is an app about cocktails, browse cocktails check recipe and have fun !</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text>Used technologie</Text>
                <Image style={styles.image} source={react} />
            </View>
            <View style={styles.sectionContainer}>
                <Text>Our dev team</Text>
                <Text style={styles.text}>Alexis Toty, Barbara Michaud, Mélyne Leray, Killian Gay</Text>
            </View>
        </SafeAreaView>
    )
}

export default ReadMe
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import styles from './Camera.style'

const CameraPage = () => {
    const actions = [
        {
            text: "Images",
            icon: require("../../assets/images/react-native-logo.png"),
            name: "bt_image",
            position: 1
        },
        {
            text: "Galerie",
            icon: require("../../assets/images/react-native-logo.png"),
            name: "bt_galerie",
            position: 1
        },
    ]

    const options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Camera</Text>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    if (name == 'bt_image') {
                        launchCamera(options)
                    } else {
                        launchImageLibrary(options)                 
                    }
                }}
            />
        </SafeAreaView>
    )
}

export default CameraPage
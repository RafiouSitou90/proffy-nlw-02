import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

interface GiveClassesProps {}

const GiveClasses = ({}: GiveClassesProps) => {
    const navigation = useNavigation();
    
    function handleNavigateGoBack () {
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>Want to be a Proffy?</Text>
                <Text style={styles.description}>To start, you need to register as a teacher on our web platform.</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateGoBack}>
                <Text style={styles.okButtonText}>Got it!</Text>
            </RectButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8257E5",
        justifyContent: "center",
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: "center"
    },

    title: {
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        fontFamily: "Poppins_400Regular",
        color: "#D4C2FF",
        fontSize: 16,
        lineHeight: 26,
        marginTop: 24,
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: "#04D361",
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    okButtonText: {
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 16
    }
});

export default GiveClasses;
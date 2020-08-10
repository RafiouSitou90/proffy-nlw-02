import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {API} from "../../services";

import landingImage from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

interface LandingProps {}

const Landing = ({}: LandingProps) => {
    const navigation  = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        API.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, [totalConnections]);

    function handleNavigationGiveClassesPage () {
        navigation.navigate('GiveClasses')
    }

    function handleNavigationStudyPages () {
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner} />

            <Text style={styles.title}>
                Welcome, {"\n"}
                <Text style={styles.titleBold}>What do you want to do?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigationStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigationGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Teach</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                More than {totalConnections} connections done {" "}
                <Image source={heartIcon} />
            </Text>
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

    banner : {
        width: "100%",
        resizeMode: "contain"
    },

    title: {
        fontFamily: "Poppins_400Regular",
        color: "#FFF",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: "Poppins_600SemiBold"
    },

    buttonsContainer: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "space-between"
    },

    button: {
        height: 120,
        width: "48%",
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between"
    },

    buttonPrimary: {
        backgroundColor: "#9871F5"
    },

    buttonSecondary: {
        backgroundColor: "#04D361"
    },

    buttonText: {
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 20
    },

    totalConnections: {
        fontFamily: "Poppins_400Regular",
        color: "#D4CDFF",
        fontSize: 14,
        lineHeight: 20,
        // maxWidth: 140,
        marginTop: 40
    }
});

export default Landing;

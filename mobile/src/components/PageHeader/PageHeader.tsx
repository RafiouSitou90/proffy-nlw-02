import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
    const navigation = useNavigation();

    function handleNavigateGoBack () {
        navigation.navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleNavigateGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImage} resizeMode="contain" />
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: "#8257E5"
    },

    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    title: {
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40

    }
});

export default PageHeader;
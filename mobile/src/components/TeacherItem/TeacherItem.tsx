import React from 'react';
import {Image, StyleSheet, View, Text} from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

interface TeacherItemProps {}

const TeacherItem = ({}: TeacherItemProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/39632507?s=460&u=b5f5e665e6b249f4202b50f622e4df6260331624&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Rafiou Sitou</Text>
                    <Text style={styles.subject}>Mathematics</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                {"\n"}{"\n"}
                Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/hour {"   "}
                    <Text style={styles.priceValue}>$ 200,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutLineIcon} />*/}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Get in touch</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#E6E6F0",
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden"
    },

    profile: {
        flexDirection: "row",
        alignItems: "center",
        padding: 24
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#EEE"
    },

    profileInfo: {
        marginLeft: 16
    },

    name: {
        fontFamily: "Archivo_700Bold",
        color: "#32264D",
        fontSize: 20
    },

    subject: {
        fontFamily: "Poppins_400Regular",
        color: "#6A6180",
        fontSize: 12,
        marginTop: 4
    },

    bio: {
        marginHorizontal: 24,
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180'
    },

    footer: {
        backgroundColor: "#FAFAFC",
        padding: 24,
        alignItems: "center"
    },

    price: {
        fontFamily: "Poppins_400Regular",
        color: "#6A6180",
        fontSize: 14
    },

    priceValue: {
        fontFamily: "Archivo_700Bold",
        color: "#8257E5",
        fontSize: 16
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },

    favoriteButton: {
        backgroundColor: "#8257E5",
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8
    },

    favorited: {
        backgroundColor: "#E33D3D"
    },

    contactButton: {
        backgroundColor: "#04D361",
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    contactButtonText: {
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
        marginLeft: 16
    }
});

export default TeacherItem;

import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, Linking} from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import {API} from "../../services";

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem = ({teacher, favorited}: TeacherItemProps) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    const { bio, name, avatar, cost, subject, whatsapp } = teacher;

    function handleLinkToWhatsApp () {
        API.post('connections', {
            user_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${whatsapp}`)
    }
    
    async function handleToggleFavorite () {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray: Teacher[] = [];

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            })

            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);
        } else {
            if (favorites) {
                favoritesArray = JSON.parse(favorites)
            }

            favoritesArray.push(teacher);
            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/hour {"   "}
                    <Text style={styles.priceValue}>$ {cost}</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {}
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        { isFavorited
                            ? <Image source={unFavoriteIcon} />
                            : <Image source={heartOutLineIcon} />
                        }
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
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
        alignItems: "center",
        marginRight: 8
    },

    contactButtonText: {
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
        marginLeft: 16
    }
});

export default TeacherItem;

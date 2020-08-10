import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';

import {PageHeader, TeacherItem} from "../../components";
import {Teacher} from "../../components/TeacherItem/TeacherItem";

interface FavoritesProps {}

const Favorites = ({}: FavoritesProps) => {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites () {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                setFavorites(JSON.parse(response));
            }
        });
    }

    useFocusEffect(
        useCallback(() => { loadFavorites() }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader title="My Proffys Favorites" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
            >
                { favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    )
                }) }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F7"
    },

    teacherList: {
        marginTop: -40,
    }

});

export default Favorites;

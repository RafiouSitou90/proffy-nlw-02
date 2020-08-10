import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from "react-native";
import {BorderlessButton, RectButton, ScrollView} from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons"
import AsyncStorage from '@react-native-community/async-storage';

import {PageHeader, TeacherItem} from "../../components";
import {API} from "../../services";
import {Teacher} from "../../components/TeacherItem/TeacherItem";
import {useFocusEffect} from "@react-navigation/native";

interface TeacherListProps {}

const TeacherList = ({}: TeacherListProps) => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function handleToggleIsFiltersVisible () {
        setIsFiltersVisible(!isFiltersVisible)
    }

    useFocusEffect(
        useCallback(() => { loadFavorites() }, [])
    );

    function loadFavorites () {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersID = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })

                setFavorites(favoritedTeachersID);
            }
        });
    }

    async function handleSearchTeachers () {
        loadFavorites()
        const response = await API.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data.classes)
        console.log(teachers, response.data.classes)
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys Available"
                headerRight={(
                    <BorderlessButton onPress={handleToggleIsFiltersVisible}>
                        <Icon name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >

                {
                    isFiltersVisible && (
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Subject</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter the subject"
                                placeholderTextColor="#C1BCCC"
                                value={subject}
                                onChangeText={text => {setSubject(text)}}
                            />

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Day of the week</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter the day"
                                        placeholderTextColor="#C1BCCC"
                                        value={week_day}
                                        onChangeText={text => {setWeekDay(text)}}
                                    />
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Hour</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter the hour"
                                        placeholderTextColor="#C1BCCC"
                                        value={time}
                                        onChangeText={text => {setTime(text)}}
                                    />
                                </View>
                            </View>

                            <RectButton style={styles.submitButton} onPress={handleSearchTeachers}>
                                <Text style={styles.submitButtonText}>Filter</Text>
                            </RectButton>
                        </View>
                    )
                }


            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
            >
                { teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
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
    },

    searchForm: {
        marginBottom: 24
    },

    label: {
        color: "#D4C2FF",
        fontFamily: "Poppins_400Regular"
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    inputBlock: {
        width: '48%'
    },

    input: {
        height: 54,
        backgroundColor: "#FFF",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    submitButton: {
        backgroundColor: "#04D361",
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    submitButtonText: {
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
    }

});

export default TeacherList;

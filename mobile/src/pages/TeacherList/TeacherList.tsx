import React from 'react';
import {StyleSheet, View, Text, TextInput} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {PageHeader, TeacherItem} from "../../components";

interface TeacherListProps {}

const TeacherList = ({}: TeacherListProps) => {

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Available">
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Subject</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the subject"
                        placeholderTextColor="#C1BCCC"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Day of the week</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter the day"
                                placeholderTextColor="#C1BCCC"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Hour</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter the hour"
                                placeholderTextColor="#C1BCCC"
                            />
                        </View>
                    </View>
                </View>
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
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
    }

});

export default TeacherList;

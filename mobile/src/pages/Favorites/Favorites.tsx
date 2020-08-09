import React from 'react';
import {StyleSheet, View} from "react-native";
import {PageHeader, TeacherItem} from "../../components";
import {ScrollView} from "react-native-gesture-handler";

interface FavoritesProps {}

const Favorites = ({}: FavoritesProps) => {

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
    }

});

export default Favorites;

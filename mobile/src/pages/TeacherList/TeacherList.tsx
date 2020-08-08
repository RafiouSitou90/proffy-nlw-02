import React from 'react';
import {StyleSheet, View} from "react-native";
import {PageHeader} from "../../components";

interface TeacherListProps {}

const TeacherList = ({}: TeacherListProps) => {

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Available" />
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: "#F0F0F7"
   }

});

export default TeacherList;

import React from 'react';
import {StyleSheet, View} from "react-native";
import {PageHeader} from "../../components";

interface FavoritesProps {}

const Favorites = ({}: FavoritesProps) => {

    return (
        <View style={styles.container}>
            <PageHeader title="My Proffys Favorites" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F7"
    }

});

export default Favorites;

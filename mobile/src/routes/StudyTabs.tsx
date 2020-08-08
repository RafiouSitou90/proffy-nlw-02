import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons as Icon } from "@expo/vector-icons";

import {Favorites, TeacherList} from "../pages";

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
    return (
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64
            },
            tabStyle: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            },
            iconStyle: {
                flex: 0,
                width: 0,
                height: 0
            },
            labelStyle: {
                fontFamily: "Archivo_700Bold",
                fontSize: 13,
                marginLeft: 16
            },
            inactiveBackgroundColor: "#FAFAFC",
            activeBackgroundColor: "#EBEBF5",
            inactiveTintColor: "#C1BCCC",
            activeTintColor: "#32264D"
        }}>
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: "Proffys",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Icon name="ios-easel" color={focused ? "#8257E5" : color} size={size} />
                        )
                    }
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Icon name="ios-heart" color={focused ? "#8257E5" : color} size={size} />
                        )
                    }
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;

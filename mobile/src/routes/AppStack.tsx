import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {GiveClasses, Landing} from "../pages";

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} /** headerMode="none" */>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;

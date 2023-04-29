import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, images } from "../../constants";


const Tab = createMaterialTopTabNavigator();

const Total = () => {

    return (
        <View style={styles.container}>
            <Text>Total</Text>
        </View>
    );
}


const Range = () => {

    return (
        <View style={styles.container}>
            <Text>Date Range</Text>
        </View>
    );

}

const RapidoManager = ({ navigation }) => {

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: COLORS.black,
                    tabBarInactiveTintColor: "#8F8F8F",
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
                }}

            >
                <Tab.Screen name="Total" component={Total} />
                <Tab.Screen name="Range" component={Range} options={() => ({
                    tabBarLabel: "Date Range"
                })} />
            </Tab.Navigator>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_text}>Onboard now</Text>
            </TouchableOpacity>
        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default RapidoManager;
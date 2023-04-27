import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";
import { HomeStack, } from "../stackNavigator";
import Icons from "../../component/Icons";
import { Text } from "react-native";


const Tab = createBottomTabNavigator();

const BottomTab = () => {



  return (
    <Tab.Navigator initialRouteName='HomeStack'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.labelStyle,
        // tabBarStyle: styles.tabBarStyle,

        tabBarIcon: ({ color }) => {
          if (route.name === 'HomeStack') {
            return (<Icons name={"home1"} size={25} color={color} />);
          } else if (route.name === 'OrderStack') {
            return (<Icons name={"chart"} size={25} color={color} />);
          } else if (route.name === 'EarningStack') {
            return (<Icons name={"discount"} size={25} color={color} />);
          } else if (route.name === 'ProfileStack') {
            return (<Icons name={"profile2"} size={25} color={color} />);
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case 'HomeStack':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Home" : null}</Text>
            case 'OrderStack':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Orders" : null}</Text>
            case 'EarningStack':
              return label =  <Text style={{ color, ...styles.labelStyle }}>{focused ? "Earning" : null}</Text>
            case 'ProfileStack':
              return label = <Text style={{ color, ...styles.labelStyle }}>{focused ? "Profile" : null}</Text>
          }
          return label
        }
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="OrderStack" component={HomeStack} />
      <Tab.Screen name="EarningStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={HomeStack} />
    </Tab.Navigator>
  )
}


export default BottomTab;


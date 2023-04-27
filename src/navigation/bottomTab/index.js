import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";
import { AccountStack, HomeStack, OrderStack, PaymentStack,  } from "../stackNavigator";
import Icons from "../../component/Icons";


const Tab = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <Tab.Navigator initialRouteName='HomeStack'
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.labelStyle,
        // tabBarStyle: {backgroundColor: COLORS.white}
      })} >
      <Tab.Screen name="HomeStack" component={HomeStack}
        options={() => ({
          tabBarLabel: "Book Now",
          tabBarIcon: ({ color }) => (
            <Icons
              name={"home"}
              size={28}
              color={color}
            />
          )
        })}
      />
    <Tab.Screen name="OrderStack" component={OrderStack}
        options={() => ({
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Icons
              name={"clock"}
              size={28}
              // color={color}
            />
          )
        })}
      />
      <Tab.Screen name="PaymentStack" component={PaymentStack}
        options={() => ({
          tabBarLabel: "Payment",
          tabBarIcon: ({ color }) => (
            <Icons
              name={"wallet"}
              size={28}
              color={color}
            />
          )
        })}
      />
      <Tab.Screen name="AccountStack" component={AccountStack}
        options={() => ({
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icons
              name={"profile"}
              size={28}
              color={color}
            />
          )
        })}
      />
    </Tab.Navigator>
  )
}


export default BottomTab;


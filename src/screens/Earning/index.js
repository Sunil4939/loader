import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, images } from "../../constants";
import Icons from "../../component/Icons";


const Tab = createMaterialTopTabNavigator();

const Payout = () => {

    return (
        <View style={{ ...styles.container, alignItems: 'center', }}>
            <FlatList
                data={dummyData.PayoutData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.date_row}>
                            <View style={styles.row1}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.text}> - weekly -Trip based</Text>
                            </View>
                            {item.payout ?
                                <TouchableOpacity style={styles.btn}>
                                    <Icons name={"download"} size={20} color={"#626262"} />
                                </TouchableOpacity>
                                :
                                null
                            }

                        </View>
                        <View style={styles.row}>
                            <View style={styles.row1}>
                                <Text style={styles.text}>Earning</Text>
                                <Text style={styles.earning}>{item.earning}</Text>
                            </View>
                            <View style={styles.row1}>
                                {item.payout ?
                                    <View style={styles.row1}>
                                        <Text style={styles.text}>Payout</Text>
                                        <Text style={styles.earning}>{item.payout}</Text>
                                    </View>
                                    :
                                    <Text style={styles.pay_release}>payout Not Released</Text>
                                }
                                <Icons name={"right"} size={20} color={COLORS.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const Trips = () => {

    return (
        <View style={styles.container}>
            <Text>Date Trips</Text>
        </View>
    );

}

const Earning = ({ navigation }) => {

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
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.white,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarStyle: { backgroundColor: COLORS.primary },
                    tabBarIndicatorStyle: { backgroundColor: "#FFF50C" },
                }}

            >
                <Tab.Screen name="Payout" component={Payout} />
                <Tab.Screen name="Trips" component={Trips} />
            </Tab.Navigator>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Earning;
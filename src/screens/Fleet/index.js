import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StatusBar } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, SIZES, dummyData, images } from "../../constants";
import Icons from "../../component/Icons";


const Tab = createMaterialTopTabNavigator();

const AllDriver = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={dummyData.DriverData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.box}
                        onPress={() => navigation.navigate("Location")}
                    >
                        <View style={styles.row1}>
                            <View style={styles.image_box}>
                                <Image source={item.image} style={styles.image} resizeMode="contain" />
                            </View>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.row1}>
                                    <Text style={styles.rating}>{item.rating}</Text>
                                    <Icons name={"star"} size={13} color={"#FFB84E"} />
                                </View>
                            </View>
                        </View>
                        <View style={{ ...styles.way_btn, backgroundColor: item.way == "ON ROAD" ? '#5DCD53' : "#FF4D4D", }}>
                            <Text style={styles.way_text}>{item.way}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const AllCars = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.car_row}>
                <View style={styles.row1}>
                    <View style={styles.image_box}>
                        <Image source={images.order} style={styles.image} resizeMode="contain" />
                    </View>
                    <View>
                        <Text style={styles.car_no}>Tata Ace - MP-09-LP-8109</Text>
                        <View style={styles.row1}>
                            <Text style={styles.driver_name}>Pranshant Kumar </Text>
                            <Text style={styles.car_loc}>Bhopal M.p</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.car_btn}>
                    <Text style={styles.car_btn_text}>Assign Driver</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.car_row}>
                <View style={styles.row1}>
                    <View style={styles.image_box}>
                        <Image source={images.order} style={styles.image} resizeMode="contain" />
                    </View>
                    <View>
                        <Text style={styles.car_no}>Tata Ace - MP-09-LP-8109</Text>
                        <View style={styles.row1}>
                            <Text style={styles.driver_name}>Pranshant Kumar </Text>
                            <Text style={styles.car_loc}>Bhopal M.p</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box1}>
                    <View style={styles.row1}>
                        <View style={styles.driver_img_box}>
                            <Image source={images.driver1} style={styles.driver_img} resizeMode="contain" />
                        </View>
                        <Text style={styles.driver_name}>Pranshant Kumar </Text>
                    </View>
                    <TouchableOpacity style={styles.car_btn}>
                        <Text style={styles.car_btn_text}>Remove Driver</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );

}

const Fleet = ({ navigation }) => {

    return (
        <View
            style={styles.container}
        >
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: COLORS.black,
                    tabBarInactiveTintColor: "#8F8F8F",
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
                }}
            >
                <Tab.Screen name="AllDriver" component={AllDriver}
                    options={() => ({
                        tabBarLabel: "ALL DRIVERS"
                    })}
                />
                <Tab.Screen name="AllCars" component={AllCars} options={() => ({
                    tabBarLabel: "ALL CARS"
                })} />
            </Tab.Navigator>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Fleet;
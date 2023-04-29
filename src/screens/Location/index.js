import React, { useEffect, useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, FlatList, ScrollView } from "react-native";
import { COLORS, SIZES, icons, images, dummyData } from "../../constants";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import styles from "./styles";
import Icons from "../../component/Icons";
import { RadioButton } from 'react-native-paper';




const Location = ({ navigation, route }) => {
    const [checked, setChecked] = useState("first");

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={position}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position}
                />
            </MapView>
            <ScrollView>
                <View style={styles.bottomSheet}>
                    <View style={styles.box}>
                        <View style={styles.row1}>
                            <View style={styles.image_box}>
                                <Image source={images.profile} style={styles.image} resizeMode="contain" />
                            </View>
                            <View>
                                <Text style={styles.name}>Sunil kumar Singh</Text>
                                <Text style={styles.text}>MHIYEOHFOJN xcent</Text>
                                <Text style={styles.text}>Current Location - Andheri west</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.call_btn}>
                            <Icons name={"call"} size={20} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text_box}>
                        <Text style={styles.text1}>Applicable categories</Text>
                    </View>

                    <View style={styles.category_box}>
                        {dummyData.CategoryData.map((item) => (
                            <TouchableOpacity style={styles.box1}
                                key={item.id}
                            // onPress={() => navigation.navigate("Location")}
                            >
                                <View style={styles.car_img_box}>
                                    <Image source={item.image} style={styles.car_img} resizeMode="contain" />
                                </View>
                                <Text style={styles.category}>{item.category}</Text>
                            </TouchableOpacity>
                        ))}

                    </View>

                    <View style={styles.text_box}>
                        <Text style={styles.text1}>Thu 17 Aug 2017</Text>
                    </View>

                    <View>
                        <View style={styles.trip_row}>
                            <Text style={styles.time}>1:03 pm</Text>
                            <TouchableOpacity
                                style={styles.radio_row}
                                onPress={() => setChecked("first")}
                            >
                                <RadioButton
                                    value="first"
                                    color={'#21950E'}
                                    status={checked == "first" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("first")}
                                />
                                <Text style={styles.trip}>Trip started</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.trip_row}>
                            <Text style={styles.time}>1:03 pm</Text>
                            <TouchableOpacity
                                style={styles.radio_row}
                                onPress={() => setChecked("second")}
                            >
                                <RadioButton
                                    value="second"
                                    color={'#21950E'}
                                    status={checked == "second" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("second")}
                                />
                                <Text style={styles.trip}>Client located</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.trip_row}>
                            <Text style={styles.time}>1:03 pm</Text>
                            <TouchableOpacity
                                style={styles.radio_row}
                                onPress={() => setChecked("third")}
                            >
                                <RadioButton
                                    value="third"
                                    color={'#21950E'}
                                    status={checked == "third" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("third")}
                                />
                                <Text style={styles.trip}>Booking Recieved</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.trip_row}>
                            <Text style={styles.time}>1:03 pm</Text>
                            <View
                                style={styles.radio_row}
                            >
                                <RadioButton
                                    // value="third"
                                    color={'#4E504E'}
                                    status={'checked'}
                                // onPress={() => setChecked("third")}
                                />
                                <TouchableOpacity style={styles.cancel_btn}
                                    onPress={() => navigation.navigate("OrderDetails")}
                                >
                                    <Text style={styles.cancel}>CANCELLED</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Location;



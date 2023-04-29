import React, { useEffect, useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, FlatList, PermissionsAndroid } from "react-native";
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Icons from "../../component/Icons";
import EarningCard from "../../component/Cards/EarningCard";


const Home = ({ navigation, route }) => {
  

       return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

            <View style={styles.amount_row}>
                <View>
                    <Text style={styles.title}>Total earning</Text>
                    <Text style={styles.date}>tursday 28 jan 2019</Text>
                </View>
                <Text style={styles.amount}>40,0000</Text>
            </View>
            <View>
                {dummyData.EarningData.map((item) => (
                    <EarningCard
                        key={item.id}
                        // source={item.image}
                        name={item.name}
                        amount={item.amount}
                        text={item.text}
                        // type={item.type}
                        mode={item.mode}
                        time={item.time}
                        onPress={() => navigation.navigate("Fleet")}
                    />

                ))}
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate("AddPost")}
            >
                <Text style={styles.btn_text}>ADD NEW DRIVER</Text>
                <Icons name={'right'} size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.hr_line} />

            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate("AddVehicle")}
            >
                <Text style={styles.btn_text}>ADD NEW Car</Text>
                <Icons name={'right'} size={25} color={COLORS.black} />
            </TouchableOpacity>

        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Home;





import React, { useEffect, useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Icons from "../../component/Icons";
import SwitchToggle from 'react-native-switch-toggle';


const Box = ({ total, title }) => {
    return (
        <TouchableOpacity style={styles.box_btn}>
            <Text style={styles.box_total}>{total}</Text>
            <Text style={styles.box_title}>{title}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation, route }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <TouchableOpacity style={styles.alert}>
                <View style={styles.alert_row}>
                    <View style={styles.image_box}>
                        <Image source={images.profile} style={styles.profile} resizeMode="contain" />
                    </View>
                    <View >
                        <Text style={styles.name}>Kuldeep Thakur</Text>
                        <Text style={styles.id}>Id : 2</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.row1}>
                        <View style={styles.dot} />
                        <Text style={styles.mode}>Online</Text>
                    </View>
                    <SwitchToggle
                        // switchOn={toggle.includes(data.item.id)}
                        onPress={() => setToggle(!toggle)}
                        // switchOn={toggle ? toggle : false}
                        switchOn={toggle}
                        circleColorOff={COLORS.white}
                        circleColorOn={COLORS.white}
                        backgroundColorOn={COLORS.green1}
                        backgroundColorOff={"#D9D9D9"}
                        containerStyle={{ ...styles.toggleContainerStyle, }}
                        circleStyle={styles.toggleCircleStyle}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wallet_btn}>
                <View style={styles.wallet_row}>
                    <Icons name={"wallet1"} size={20} color={COLORS.white} />
                    <View style={styles.wallet_box}>
                        <Text style={styles.wallet_text}>Wallet Balance</Text>
                        <Text style={styles.wallet_amount}>₹250</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.box_container}>
                {dummyData.RangeData.map((item) => (
                    <Box key={item.id} total={item.total} title={item.title} />
                ))}
            </View>

        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Home;





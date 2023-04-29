import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { COLORS, icons } from '../../constants';
import Icons from '../../component/Icons';

const OrderRow = ({ title, text }) => {
    return (
        <View style={styles.order_row}>
            <Text style={styles.order_title}>{title}</Text>
            <Text style={styles.order_text}>{text}</Text>
        </View>
    )
}

const OrderDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.header}>
                <View style={styles.header_row}>
                    <Image source={icons.truck} style={styles.truck} resizeMode='contain' />
                    <Text style={styles.header_text}>MH11AB1224</Text>
                </View>
                <View style={styles.header_row}>
                    <Image source={icons.user} style={styles.user} resizeMode='contain' />
                    <Text style={styles.header_text}>Amol Patil</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate("Earning")}
            >
                <View style={styles.btn_row}>
                    <Image source={icons.clock1} style={styles.clock1} resizeMode='contain' />
                    <Text style={styles.btn_text}>Order History</Text>
                </View>
                <View style={styles.btn_row}>
                    <Text style={styles.btnText}>8 Orders</Text>
                    <Icons name={"right"} size={20} color={COLORS.primary} />
                </View>
            </TouchableOpacity>

            <View style={styles.box}>
                <Text style={styles.title}>Contract Details</Text>
                <OrderRow title={"Duration"} text={"26 Nov, 2021 - 26 Nov, 2021"} />
                <OrderRow title={"Time"} text={"9 AM - 6 PM"} />
                <OrderRow title={"Schedule"} text={"26 days / month"} />
                <OrderRow title={"Base Amount"} text={"₹ 34,5000"} />
                <OrderRow title={"Total distance"} text={"345  kms"} />
                <OrderRow title={"Daily Hour Cap"} text={"6  hours"} />
                <OrderRow title={"Daily Distance Cap"} text={"120 kms"} />
            </View>

            <View style={styles.box}>
                <Text style={styles.title}>Payment Information</Text>
                <View style={styles.add_box}>
                    <Text style={styles.title1}>Billing Address</Text>
                    <Text style={styles.add}>B-23, 2nd Floor, C-Sector, Indrapuri, Bhopal, Madhya Pradesh, 462022</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderDetails;
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {  COLORS, FONTS, SIZES, images } from "../../constants";

const Alert = ( {source, title, message, onPress} ) => {
    return (
        <TouchableOpacity style={styles.alert} onPress={onPress}>
            <View style={styles.alertImage} />
            {/* <Image style={styles.alertImage} source={source} resizeMode="contain" /> */}
            <View style={styles.text_box}>
                <Text style={styles.alertTitle}>{title}</Text>
                <Text style={styles.alertContent}>{message}</Text>
            </View>
        </TouchableOpacity>
    )
}

Alert.defaultProps = {
    source: images.profile,
    title: "title",
    message: "message",
    onPress: null
}

export default Alert;

const styles = StyleSheet.create({
    alert:{
        width: SIZES.width * .9,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#C8C8C8',
        borderRadius:7,
        paddingVertical: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .02,
        marginTop: SIZES.height * .02,
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
    },
    alertImage:{
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        borderRadius: 50,
        backgroundColor: 'rgba(35, 35, 35, 0.56)',
    },
    text_box: {
        width: SIZES.width * .68,
        // borderWidth:1,
    },

    alertTitle:{
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: '#353638',
    },
    alertContent:{
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: '#353638',
    },
})
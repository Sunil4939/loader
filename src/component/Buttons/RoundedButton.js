import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const RoundedButton = ({
    style,
    children,
    width,
    backgroundColor,
    textColor,
    onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, style,{backgroundColor: backgroundColor, width: width}]}
            onPress={onPress}
        >
            <Text
                style={[styles.btnText, {color: textColor}]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    )
}

RoundedButton.defaultProps = {
    style: null,
    textColor: COLORS.white,
    backgroundColor: COLORS.primary,
    width: SIZES.width * .9,
    children: null,
    onPress: null
}

export default RoundedButton;

const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: COLORS.primary,
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white,
        marginBottom: -4,
    },

})
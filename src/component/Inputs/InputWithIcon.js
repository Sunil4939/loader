import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input1 from '../../atoms/inputs/Input1'
import Icons from '../../atoms/Icons'
import { COLORS, SIZES } from '../../../constants'


const InputWithIcon = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    leftIcon,
    leftIconStyle,
    inputStyle }) => {
    return (
        <View
            style={[styles.inputStyle, inputStyle]}
        >
            {leftIcon &&
                <Icons
                    name={leftIcon}
                    size={20}
                    style={[styles.iconStyle, leftIconStyle]}
                    color={COLORS.primary} />
            }
            <Input1
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={[styles.inputTextStyle, inputTextStyle]}
                keyboardType={keyboardType}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

InputWithIcon.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: "",
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
    leftIcon: null,
    leftIconStyle: null,
    inputStyle: null
}

export default InputWithIcon;

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: SIZES.base,
        backgroundColor: COLORS.white,
        elevation: 10,
        shadowColor: COLORS.primary,
        borderColor: COLORS.primary,
        marginBottom: SIZES.margin,
    },

    inputTextStyle: {
        width: SIZES.width * .74,
        borderWidth: 0,
        elevation: 0,
    },

    iconStyle: {
        marginHorizontal: 10,
    },
})
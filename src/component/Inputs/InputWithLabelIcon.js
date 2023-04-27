import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input1 from '../../atoms/inputs/Input1'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Icons from '../../atoms/Icons'


const InputWithLabelIcon = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    label,
    labelStyle,
    inputStyle,
    rightIcon,
    rightIconStyle,
    onPress }) => {
    return (
        <View
            style={[styles.inputStyle, inputStyle]}
        >
            {label &&
                <Text
                    style={[styles.label, labelStyle]}
                >
                    {label}
                </Text>
            }
            <View
            style={styles.inputBox}
            >
                <Input1
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    style={[styles.inputTextStyle, inputTextStyle]}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    secureTextEntry={secureTextEntry}
                />
                {rightIcon &&
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.btn}
                    >
                        <Icons
                            name={rightIcon}
                            size={20}
                            style={[styles.iconStyle, rightIconStyle]}
                            color={COLORS.light2}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

InputWithLabelIcon.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: "",
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
    label: null,
    labelStyle: null,
    inputStyle: null,
    rightIcon: null,
    rightIconStyle: null,
    onPress: null,
}

export default InputWithLabelIcon;

const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: 2,
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: SIZES.base,
        backgroundColor: COLORS.white,
        borderColor: COLORS.light,
        marginBottom: SIZES.height * .02,
    },
    inputTextStyle: {
        width: SIZES.width * .8,
        borderWidth: 0,
        borderRadius: SIZES.base,
        paddingLeft: 15,
        marginBottom: 0,
    },

    btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: "center",
        // borderWidth: 1,
    },

})
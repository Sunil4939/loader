import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input2 from '../../atoms/inputs/Input2'
import Icons from '../../atoms/Icons'
import { COLORS, SIZES } from '../../../constants'


const InputWithRightIcon = ({
    placeholder,
    onPress,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    rightIcon,
    rightIconStyle,
    inputStyle }) => {
    return (
        <View
            style={[styles.inputStyle, inputStyle]}
        >
            <Input2
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
    )
}

InputWithRightIcon.defaultProps = {
    inputTextStyle: null,
    onChangeText: null,
    placeholder: "",
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
    rightIcon: null,
    rightIconStyle: null,
    inputStyle: null,
    onPress: null,
}

export default InputWithRightIcon;

const styles = StyleSheet.create({
    inputStyle: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
        marginBottom: 5,
    },

    inputTextStyle: {
        width: SIZES.width * .8,
        borderBottomWidth: 0,
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
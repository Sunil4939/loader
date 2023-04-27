import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input1 from '../../atoms/inputs/Input1'
import { COLORS, FONTS, SIZES } from '../../../constants'


const InputWithLabel = ({
    placeholder,
    onChangeText,
    value,
    inputTextStyle,
    keyboardType,
    maxLength,
    secureTextEntry,
    label,
    labelStyle,
    inputStyle }) => {
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

InputWithLabel.defaultProps = {
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
}

export default InputWithLabel;

const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginBottom: 2,
    },
    
   
})
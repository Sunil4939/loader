import React from 'react';
import { View,  StyleSheet, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Input2 = ({ 
    placeholder, 
    onChangeText, 
    value, 
    style,
    keyboardType,
    maxLength,
    secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.black1}
                onChangeText={onChangeText}
                value={value}
                style={[styles.inputStyle,style]}
                keyboardType={keyboardType}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
Input2.defaultProps = {
    style: null,
    onChangeText: null,
    placeholder: "placeholder",
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
}

export default Input2;

const styles = StyleSheet.create({
    inputStyle: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        paddingBottom: -4,
        borderBottomWidth: 1,
        backgroundColor: COLORS.white,
        borderBottomColor: COLORS.black,
        marginBottom: 5,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})
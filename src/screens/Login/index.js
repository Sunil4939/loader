import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'


const Login = ({ navigation, LoginApi }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [phone, setPhone] = useState()

    const handleSubmit = () => {
        const postData = {
            mobile: phone
        }
        if (phone) {
            LoginApi(postData, navigation)
            // console.log("login postData : ", postData)
        } else {
            RNToasty.Normal({
                title: "Please Enter mobile number",
                duration: 2
            })
        }
    }
    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.image_container}>
                        <View style={styles.image_box}>
                            <Image source={images.loginImg} style={styles.image} resizeMode='contain' />
                            <Image source={images.login_bg} style={styles.login_bg} resizeMode='contain' />
                        </View>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Enter your mobile number </Text>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={styles.row}>
                            <Image source={images.india} style={styles.india} resizeMode='contain' />
                            <Text style={styles.code}>91+</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            placeholderTextColor={COLORS.gray20}
                            keyboardType='numeric'
                        />
                    </View>
                    <RoundedButton style={{marginTop: SIZES.height * .03}}
                    onPress={() => navigation.navigate("Otp")}
                    >
                        Login
                    </RoundedButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    // LoginApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
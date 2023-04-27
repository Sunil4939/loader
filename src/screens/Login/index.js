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

    const [able, setAble] = useState(true)

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
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
            >
                <View style={styles.header}>
                    <View style={styles.image_box}>
                        <Image source={images.logo1} style={styles.image} resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.box}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                // placeholder='Enter mobile number'
                                placeholderTextColor={COLORS.gray20}
                                keyboardType='numeric'
                                maxLength={10}
                                onChangeText={(text) => setPhone(text)}
                            />
                            <Image source={images.india} style={styles.india} resizeMode='contain' />
                        </View>
                    </View>
                    <RoundedButton
                        backgroundColor={"#BFBFC1"}
                        textColor={"#707070"}
                        onPress={() => navigation.navigate("Otp")}
                    >
                        Login
                    </RoundedButton>

                    <View style={styles.titleBox}>
                        <View style={styles.row}>
                            <Text style={styles.text}>By logging in you agree to the</Text>
                            <Text style={{ ...styles.text, color: COLORS.primary, }}> terms of service</Text>
                            <Text style={styles.text}> and </Text>
                            <Text style={{ ...styles.text, color: COLORS.primary, }}>privacy policy</Text>
                        </View>
                    </View>

                    {!phone &&
                        <View style={styles.bottom_box}>
                            <Text style={styles.title}>not able to sign in ?</Text>
                            <TouchableOpacity>
                                <Text style={styles.support}>Call support</Text>
                            </TouchableOpacity>
                        </View>
                    }
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
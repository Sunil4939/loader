import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { connect } from 'react-redux'
import { VerifyOtpApi } from '../../redux/actions/authAction'
import { RNToasty } from 'react-native-toasty'
import styles from './styles'
import RoundedButton from '../../component/Buttons/RoundedButton'



const Otp = ({ route, navigation, loading, VerifyOtpApi }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [otp, setOtp] = useState()
    const [postData, setPostData] = useState({
        // mobile: route.params.mobile,
        otp: null
    })
    // console.log(route.params.mobile)
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        if (postData.otp) {
            // console.log(postData)
            VerifyOtpApi(postData)
        } else {
            RNToasty.Normal({
                title: "Please Enter otp",
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
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Enter OTP</Text>
                    </View>
                    <View style={styles.OtpRow}>
                        <OTPInputView
                            // onPress={() => console.log("press me")}
                            style={styles.OtpinputBox}
                            pinCount={4}
                            codeInputFieldStyle={styles.boxstyle}
                            onCodeFilled={(code => setOtp(code))}
                        />
                    </View>
                    <RoundedButton style={{ marginVertical: SIZES.height * .04 }}
                        // onPress={() => navigation.navigate("Register")}
                    >
                        Submit
                    </RoundedButton>

                    <TouchableOpacity>
                        <Text style={styles.btnText}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
})

const mapDispatchToProps = {
    VerifyOtpApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Otp)

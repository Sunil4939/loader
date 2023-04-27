import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
// import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { SignUpApi } from '../../redux/actions/authAction'
import { RNToasty } from 'react-native-toasty'
import styles from './styles'
import RoundedButton from '../../component/Buttons/RoundedButton'
import SelectDropdown from 'react-native-select-dropdown'
import Icons from '../../component/Icons'
import CheckBox from '@react-native-community/checkbox'

const Register = ({ navigation, SignUpApi }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [checked, setChecked] = useState(false)
    const [postData, setPostData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    })

    const data = ["I will be using Porter for", "Business Usage", "Personal Usage", "House Shifting Usage"]
    // console.log(route.params.mobile)
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        if (postData.name && postData.email && postData.mobile && postData.password) {
            SignUpApi(postData, navigation)
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
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
                            <Image source={images.logo} style={styles.image} resizeMode='contain' />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.row}>
                            <Image source={images.india} style={styles.india} resizeMode='contain' />
                            <Text style={styles.mobile}>7415173563</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={styles.input_row}>
                            <TextInput
                                style={styles.input1}
                                placeholder='First Name'
                                placeholderTextColor={COLORS.gray20}
                            />
                            <TextInput
                                style={styles.input1}
                                placeholder='Last Name'
                                placeholderTextColor={COLORS.gray20}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Id'
                            placeholderTextColor={COLORS.gray20}
                        />

                        <View style={styles.dropdown_input}>
                            <Text style={styles.text}>Requirements</Text>
                            <SelectDropdown
                                dropdownIconPosition={'right'}
                                rowTextStyle={{ textAlign: 'center', padding: 0 }}
                                renderDropdownIcon={() => (
                                    <Icons name="down" size={15} style={styles.down} color={COLORS.black} />
                                )}
                                dropdownStyle={styles.dropDown}
                                buttonStyle={styles.dropDownBtnStyle}
                                buttonTextStyle={styles.dropDownTextStyle}
                                data={data}
                                defaultValueByIndex={0}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    // onChangeText && onChangeText(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                        <RoundedButton style={{ marginVertical: SIZES.height * .04 }}
                            onPress={() => navigation.navigate("Register")}
                        >
                            Register
                        </RoundedButton>
                        <View style={styles.bottom_row}>
                            <CheckBox
                                disabled={false}
                                value={checked}
                                tintColors={{ true: COLORS.primary, false: COLORS.primary }}
                                onValueChange={() => setChecked(!checked)}
                            // style={styles.checkBox}
                            />
                            <Text style={styles.bottom_text}>Allow Loader to send update on </Text>
                            <Icons name={"whatsapp"} size={20} style={{ marginRight: 3 }} />
                            <Text style={styles.bottom_text}>Whatsapp</Text>
                        </View>

                        <View>
                            <Text style={styles.bottom_text}>A one time (OTP) will bw sent to the number for
                                verfication</Text>
                        </View>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
})

const mapDispatchToProps = {
    SignUpApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
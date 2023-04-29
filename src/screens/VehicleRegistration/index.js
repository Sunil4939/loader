import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'
import SelectDropdown from 'react-native-select-dropdown'
import Icons from '../../component/Icons'
import { BottomSheet } from 'react-native-btr'


const VehicleRegistration = ({ navigation, }) => {
    const [type, setType] = useState('')
    const [city, setCity] = useState('')

    const [typeBottom, setTypeBottom] = useState(false)
    const [cityBottom, setCityBottom] = useState(false)
    const cities = ["Bhopal", "Indore", "Sehor", "Jabalpur", "Mumbai", "Delhi"]
    const types = ["Tata Ace", "Tata 407", "Super Ace 8ft", "3 Wheeler", "2 Wheeler", "Other"]

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
                keyboardShouldPersistTaps={'handled'}
            >
                <View style={styles.header}>
                    <View style={styles.image_box}>
                        <Image source={images.logo} style={styles.image} resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Please fill below detail to start earning</Text>
                    </View>
                    <View style={styles.box}>
                        <View>
                            <Text style={styles.label}>Driver Name</Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.input1}
                                    placeholderTextColor={COLORS.gray20}
                                />
                                <Image source={icons.userIcon} style={styles.user} resizeMode='contain' />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Driver’s Number</Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.input1}
                                    maxLength={10}
                                    keyboardType='numeric'
                                    placeholderTextColor={COLORS.gray20}
                                />
                                <Image source={icons.userIcon} style={styles.user} resizeMode='contain' />
                            </View>

                        </View>
                        <View>
                            <Text style={styles.label}>Owner’s Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={COLORS.gray20}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>City</Text>
                            <TouchableOpacity style={styles.inputBox}
                                onPress={() => setCityBottom(!cityBottom)}
                            >
                                <TextInput
                                    style={styles.input1}
                                    placeholderTextColor={COLORS.gray20}
                                    editable={false}
                                    value={city}
                                />
                                <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
                            </TouchableOpacity>
                            <BottomSheet
                                visible={cityBottom}
                                onBackButtonPress={() => setCityBottom(!cityBottom)}
                                onBackdropPress={() => setCityBottom(!cityBottom)}
                            >
                                <View style={styles.bottomSheet}>
                                    <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                        <Text style={{ ...styles.input, color: "#848484", }}>City</Text>
                                    </View>
                                    <View style={styles.type_box}>
                                        {cities.map((item, index) => (
                                            <TouchableOpacity key={index}
                                                onPress={() => { setCity(item), setCityBottom(!cityBottom) }}
                                            >
                                                <Text style={styles.type}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                        <View>
                            <Text style={styles.label}>Vehicle Type</Text>
                            <TouchableOpacity style={styles.inputBox}
                                onPress={() => setTypeBottom(!typeBottom)}
                            >
                                <TextInput
                                    style={styles.input1}
                                    placeholderTextColor={COLORS.gray20}
                                    editable={false}
                                    value={type}
                                />
                                <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
                            </TouchableOpacity>

                            <BottomSheet
                                visible={typeBottom}
                                onBackButtonPress={() => setTypeBottom(!typeBottom)}
                                onBackdropPress={() => setTypeBottom(!typeBottom)}
                            >
                                <View style={styles.bottomSheet}>
                                    <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                        <Text style={{ ...styles.input, color: "#848484", }}>Vehicle Type</Text>
                                    </View>
                                    <View style={styles.type_box}>
                                        {types.map((item, index) => (
                                            <TouchableOpacity key={index}
                                                onPress={() => { setType(item), setTypeBottom(!typeBottom) }}
                                            >
                                                <Text style={styles.type}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                    </View>
                    <RoundedButton
                        style={{ borderRadius: 30, height: SIZES.height * .07, position: "absolute", bottom: SIZES.height * .05 }}
                        onPress={() => navigation.navigate("UploadDocument")}
                    >
                        PROCEED
                    </RoundedButton>

                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleRegistration)
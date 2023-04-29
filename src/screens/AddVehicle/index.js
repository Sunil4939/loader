import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'


const AddVehicle = ({ navigation, }) => {
    const [number, setNumber] = useState()

    
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
                    <View style={styles.titleBox}>
                        <Text style={styles.text}>Please fill below details to start earning</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.label}>Vehicle Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Vehicle Number'
                            placeholderTextColor={COLORS.gray20}
                            onChangeText={(text) => setNumber(text)}
                        />
                    </View>
                    <RoundedButton
                        backgroundColor={number ? COLORS.primary :"#BFBFC1"}
                        textColor={number ? COLORS.white : "#707070"}
                        onPress={() => navigation.navigate("VehicleRegistration")}
                        disabled={number ? false : true}
                    >
                        Proceed
                    </RoundedButton>
                    {/* <Text style={styles.err}>34543d : Incorrect vehicle number Please enter valid vehicle number , eg : KA-21-HU-2345</Text> */}

                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle)
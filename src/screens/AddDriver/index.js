import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'


const AddDriver = ({ navigation, }) => {
    const [code, setCode] = useState()


   
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

                <View style={styles.container1}>
                    <View style={styles.titleBox}>
                        <Text style={styles.text}>Please fill below details to start earning</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.label}>Driver code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Driver code'
                            placeholderTextColor={COLORS.gray20}
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={(text) => setCode(text)}
                        />
                    </View>
                    <RoundedButton
                        backgroundColor={code ? COLORS.primary :"#BFBFC1"}
                        textColor={code ? COLORS.white : "#707070"}
                        onPress={() => navigation.goBack()}
                        disabled={code ? false : true}
                    >
                        proceed
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDriver)
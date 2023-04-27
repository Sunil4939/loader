import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
import { connect } from "react-redux";
import Icons from "../../component/Icons";
import NavigateButton from "../../component/NavigateButton";


const MyAccount = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.profileBox}>
                    <View >
                        <View style={styles.userProfileBox}>
                            <Image source={images.profile} style={styles.userProfile} resizeMode='contain' />
                        </View>
                        {/* <View >
                                    <Image source={icons.Edit} style={styles.Edit} resizeMode='contain' />
                                </View> */}
                    </View>
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Andrew Forbes</Text>
                    <Text style={styles.text}>+91 9632587410</Text>
                </View>

                <View style={styles.btnContainer}>
                    <NavigateButton source={icons.profile1}
                        onPress={() => navigation.navigate("EditProfile")}
                    >
                        Edit Profile
                    </NavigateButton>
                    <NavigateButton source={icons.vehicle}
                        onPress={() => navigation.navigate("CheckVehicle")}
                    >
                        Check vehicle
                    </NavigateButton>
                    <NavigateButton source={icons.info}
                        onPress={() => navigation.navigate("TermsAndCondition")}
                    >
                        Terms & conditions
                    </NavigateButton>
                    <NavigateButton source={icons.info}
                        onPress={() => navigation.navigate("PrivacyPolicy")}
                    >
                        Privacy policy
                    </NavigateButton>
                    <NavigateButton source={icons.info}
                        onPress={() => navigation.navigate("AboutUs")}
                    >
                        About Us
                    </NavigateButton>

                    <NavigateButton source={icons.logout}
                        iconColor={COLORS.blue}
                        rightIconVisible={false}
                        textColor={COLORS.blue}
                    >
                        Logout
                    </NavigateButton>

                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
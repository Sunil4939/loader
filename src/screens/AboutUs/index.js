import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";


const AboutUs = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.center_box}>
                <View style={styles.contentBox}>
                    <Text style={styles.text}>What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policy What is your Returns/Exchange policyWhat is your Returns/Exchange policy</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
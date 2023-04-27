import React from "react";
import { useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { connect } from "react-redux";
import Alert from "../../component/Alert";
import { COLORS, dummyData, icons, } from "../../constants";
import styles from "./styles";


const Notification = ({ navigation, }) => {

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={{ alignItems: 'center' }}>
                <View style={styles.notioficationBox}>
                    <Text style={styles.heading}>Today</Text>
                    {dummyData.NotificationData.slice(0, 6).map((item) => (
                        <Alert key={item.id} title={item.title} message={item.content} />
                    )
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    // loading: state.notification.loading,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
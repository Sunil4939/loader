import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    icons: {
        marginBottom: -5,
    },

    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        // color: COLORS.black,
    },

    tabBarStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        backgroundColor: "#FFFFFF",
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 10,
        borderRadius: 12,
        position: 'absolute',
        bottom: SIZES.height * .02,
        marginHorizontal: SIZES.width * .05,
        justifyContent: 'flex-start',
        borderTopWidth: 0,
    },

})
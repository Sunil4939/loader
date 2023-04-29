import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white,
    },

    tabBarLabelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        // color: "#777777",
    },

    btn: {
        width: SIZES.width,
        height: SIZES.height * .06,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SIZES.height * .06,
    },
    btn_text: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        marginBottom: -3,
        color: COLORS.white,
    },
})
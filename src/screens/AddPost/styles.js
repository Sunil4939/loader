import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    btn: {
        width: SIZES.width,
        height: SIZES.height * .07,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .05,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25',
        marginTop: SIZES.height * .02,
    },
    btn_text: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        marginBottom: -3,
        color: COLORS.black,
    },
})
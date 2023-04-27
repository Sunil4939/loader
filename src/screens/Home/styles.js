import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },


    amount_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: SIZES.height * .02,
    },

    

    amount: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        marginBottom: -5,
        color: COLORS.black,
    },

    title: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
    },
    date: {
        fontFamily: FONTS.regular,
        fontSize: 11,
        marginBottom: -3,
        color: "#797171",
    },

    date_text: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        marginBottom: -3,
        color: COLORS.black,
        paddingVertical: 3,
    },

   

    

   
    hr_line: {
        width: SIZES.width,
        borderColor: "#939499",
        borderBottomWidth: 1,
    },

    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginVertical: SIZES.height * .02,
    },
    btn_text: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        marginBottom: -3,
        color: COLORS.black,
    },

   
})
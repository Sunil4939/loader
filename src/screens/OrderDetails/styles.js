import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },


    header: {
        // width: SIZES.width * .9,
        // height: SIZES.height * .2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .05,
        elevation: 10,
        backgroundColor: COLORS.white,
        paddingBottom: SIZES.height * .01,
        marginBottom: SIZES.height * .02,
    },

    header_row: {
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    header_text: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: "#8A8888",
        marginBottom: -2,
    },
    truck: {
        width: 25,
        height: 25,
        marginRight: SIZES.width * .015,
    },
    user: {
        width: 18,
        height: 18,
        marginRight: SIZES.width * .015,
    },
    clock1: {
        width: 25,
        height: 25,
        marginRight: SIZES.width * .05,
    },

    btn: {
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .05,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderColor: '#D0D0D0',
        // marginVertical: SIZES.height * .02,
    },
    btn_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
        marginBottom: -3,
    },
    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -2,
        color: COLORS.primary,
    },
    box: {
        alignItems: 'center',
        // borderWidth: 1,
        marginVertical: SIZES.height * .02,
    },
    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        // marginBottom: -2, 
        color: COLORS.black,
        marginVertical: SIZES.height * .02,
    },
    add_box: {
        width: SIZES.width * .9,

    },
    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 13,
        marginBottom: -2, 
        color: COLORS.black,
    },
    add: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: "#4F4F4F",
    },


  

    order_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.height * .01,
        // justifyContent: 'space-between',
    },
    order_title: {
        width: SIZES.width * .45,
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: "#4F4F4F",
        marginBottom: -3,
    },
    order_text: {
        width: SIZES.width * .45,
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -2,
        color: "#4F4F4F",
    },


})
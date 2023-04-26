import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    tab_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    tab_btn: {
        width: SIZES.width * .46,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 20,
        // backgroundColor: COLORS.primary,
    },

    indicator: {
        width: SIZES.width *.36,
        borderBottomWidth: 8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: COLORS.primary,
        position: 'absolute',
        bottom:0,
    },

    tab_label: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        marginBottom: -5,
        color: "#5C4848",
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
        color: "#5F5A5A",
    },

    title: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        marginBottom: -4,
        color: "#5F5A5A",
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

    date_row: {
        width: SIZES.width * .45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: SIZES.width * .05,
        // justifyContent: 'center',
    },

    date_btn: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "space-between",
        borderWidth: 1,
        borderColor: COLORS.black, 
        borderRadius: 12,
        paddingVertical: SIZES.height * .01,
        marginVertical: SIZES.height * .02,
    },

    box: {
        width: SIZES.width * .45,
        alignItems: 'center', 
    },
    box_btn: {
        width: SIZES.width * .4,
        height: SIZES.height * .1,
        backgroundColor: COLORS.white,
        elevation: 10,
        borderRadius: 12,
        paddingLeft: SIZES.width * .05,
        justifyContent: 'center', 
        marginVertical: SIZES.height * .01,
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    box_container: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    box_total: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        marginBottom: -6,
        color: COLORS.primary,
    },
    box_title: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -3,
        color: "#926C6C",
        paddingVertical: 3,
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        marginBottom: -3,
        color: "#926C6C",
        marginVertical: SIZES.height * .03,
    },

    dash_btn: {
        width: SIZES.width * .4,
        height: SIZES.height * .05,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderColor: COLORS.black,
        borderWidth: 1,
        marginVertical: SIZES.height * .02,
    },
    dash_btn_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -3,
        color: COLORS.black,
    },


    invite_btn: {
        width: SIZES.width * .55,
        height: SIZES.height * .056,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 8,
        // marginVertical: SIZES.height * .02,
    },
    invite_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
        color: "#515050",
    },

    bottom_btn: {
        width: SIZES.width,
        height: SIZES.height * .07,
        backgroundColor: "#D9D9D9",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    bottom_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
        color: COLORS.black,
    },
})
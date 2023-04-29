import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },


    image_box: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        borderRadius: SIZES.width * .05,
        marginRight: SIZES.width * .03,
        backgroundColor: 'rgba(101, 101, 101, 0.15)',
        elevation: 10,
        shadowColor: 'rgba(101, 101, 101, 0.15)',
    },

    image: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: SIZES.height * .02,
        borderBottomWidth: 1,
        borderColor: "#575759",
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .02,
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },


    name: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
    },

    rating: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -4,
        color: "#989898",
        marginRight: 4,
    },
    way_btn: {
        width: SIZES.width * .2,
        height: SIZES.height * .03,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#5DCD53',
        borderRadius: 3,
    },

    way_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: COLORS.white,
    },

    car_row: {
        height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: SIZES.height * .02,
        borderBottomWidth: 1,
        borderColor: "#575759",
        paddingHorizontal: SIZES.width * .02,
        // paddingVertical: SIZES.height * .02,
    },
    car_no: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -4,
        color: COLORS.black,
    },

    driver_name: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        marginBottom: -3,
        color: COLORS.primary,
        marginRight: 4,
    },
    car_loc: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        marginBottom: -3,
        color: "#5F5A5A",
        marginRight: 4,
    },
    car_btn: {
        width: SIZES.width * .24,
        // height: SIZES.height * .03,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    car_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        // marginBottom: -4,
        color: "#5251C5",
    },

    box1: {
        height: SIZES.height * .06,
        alignItems: "flex-end",
        justifyContent: 'space-between',
        marginTop: SIZES.width * -.01,
    },

    driver_img_box: {
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: SIZES.width * .05,
        marginRight: SIZES.width * .01,
        backgroundColor: 'rgba(101, 101, 101, 0.15)',
        marginTop: SIZES.height * .01,
    },

    driver_img: {
        width: SIZES.width * .05,
        height: SIZES.height * .02,
    },

})
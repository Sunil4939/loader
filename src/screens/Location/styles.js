import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },

    map: {
        // flex:1,
        width: SIZES.width,
        height: SIZES.height * .43,
    },

    bottomSheet: {
        // width: SIZES.width,
        // height: SIZES.height * .7,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        // paddingHorizontal: SIZES.width * .04,
        paddingVertical: SIZES.height * .02,
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SIZES.width * .9,
        // borderBottomWidth: 1,
        // borderColor: "#575759",
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
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
    name: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -4,
        color: "#989898",
    },

    hr_line: {
        width: SIZES.width,
        marginVertical: SIZES.height * .015,
        borderWidth: 1,
        borderColor: '#D0D0D0',
    },
    call_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: COLORS.primary,
        // backgroundColor: COLORS.primary,
        marginVertical: SIZES.height * .03,
    },
    category_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.height * .02,
    },

    box1: {
        alignItems: 'center',
        width: SIZES.width * .2,
    },
    car_img_box: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.width * .1,
        backgroundColor: '#C4C4C4',
    },

    car_img: {
        width: SIZES.width * .08,
        height: SIZES.height * .04,
    },
    category: {
        width: SIZES.width * .12,
        fontFamily: FONTS.regular,
        fontSize: 11,
        // marginBottom: -5,
        color: "#989898",
        textAlign: 'center',
    },


    text_box: {
        width: SIZES.width,
        height: SIZES.height * .04,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#C4C4C4",
        borderTopWidth: 1,
        borderColor: "#989898",
        paddingLeft: SIZES.width * .1,
        // marginVertical: SIZES.height * .03,
    },
    text1: {
        fontFamily: FONTS.medium,
        fontSize: 11,
        color: "#6F6A6A",
    },

    time: {
        fontFamily: FONTS.regular,
        fontSize: 11,
        color: "#6F6A6A",
    },
    trip: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        color: COLORS.black,
    },
    trip_row: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    radio_row: {
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    cancel_btn: {
        width: SIZES.width * .3,
        height: SIZES.height * .04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: "#615B5B",
        // marginVertical: SIZES.height * .03,
    },
    cancel: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.white,
        marginBottom: -2,
    },
})
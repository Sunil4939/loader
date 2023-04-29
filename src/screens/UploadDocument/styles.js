import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    center: {
        alignItems: 'center',
    },
    progressBar: {
        marginVertical: SIZES.height * .02,
        borderRadius: 10,
    },
    radio_box: {
        position: 'absolute',
        top: 10,
    },
    radio: {
        width :16,
        height: 16,
        borderRadius: 30,
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    
    row: {
        width: SIZES.width * .96,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: SIZES.height * .02,
    },
    label: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
        color: "#A6A6A6",
    },
    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.regular,
        fontSize: 15,
        marginBottom: -3,
        color: "#614B4B",
    },
    camera_btn: {
        width: SIZES.width * .32,
        height: SIZES.height * .15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 20,
        marginTop: SIZES.height * .02,
    },
    camera: {
        width: SIZES.width * .16,
        height: SIZES.height * .08,
    },
    note: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        marginBottom: -3,
        color: "#776A97",
        marginVertical: SIZES.height * .04,
    },
    image_box: {
        width: SIZES.width * .7,
        height: SIZES.height * .4,
        borderWidth: 1,
        borderRadius: 8,
        // overflow: 'hidden',
        alignItems: 'center',
        justifyContent: "center",
        borderColor: '#D2D2D2',
        marginVertical: SIZES.height * .04,
    },
    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .4,
        borderRadius: 8,
    },

    close_btn: {
        backgroundColor: COLORS.black,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        padding: 4,
        position: 'absolute',
        top: -8,
        right: -8,
        // zIndex: 5,
    },
    upload: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        marginBottom: -3,
        color: "#999999",
    },
    title1: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: 18,
        marginBottom: -3,
        color: COLORS.black,
        marginBottom: SIZES.height * .02,
    },

    text: {
        width: SIZES.width * .8,
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -3,
        color: "#999999",
    },
   
    btn_box: {
        width: SIZES.width,
        alignItems: 'center',
        bottom: SIZES.height * .05,
        position: 'absolute',
    },
})
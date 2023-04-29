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
        width: SIZES.width * .8,
        height: SIZES.height * .26,
        borderWidth: 1,
        borderRadius: 8,
        // overflow: 'hidden',
        alignItems: 'center',
        justifyContent: "center",
        borderColor: '#D2D2D2',
        marginVertical: SIZES.height * .04,
    },
    image: {
        width: SIZES.width * .8,
        height: SIZES.height * .26,
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
        marginVertical: SIZES.height * .03,
        // position: 'absolute',
    },





    box: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .01,
        marginBottom: SIZES.height * .04,
    },

 
    label: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: "#999999",
        marginBottom: -2
    },

    input: {
        height: SIZES.height * .05,
        paddingVertical: SIZES.height * .01,
        fontSize: 13,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        width: SIZES.width * .9,
        borderBottomWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
        marginBottom: SIZES.height * .02,
    },
   
    dropDown: {
        height: "30%",
        borderRadius: 7,
    },
    dropDownBtnStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .05,
        borderBottomWidth: 1,
        // borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
        marginBottom: SIZES.height * .02,

    },
    dropDownTextStyle: {
        fontSize: 13,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        textAlign: 'left',
        marginLeft: 0,
    },

    user: {
        width: SIZES.width * .07,
        height: SIZES.height * .035,
    },
  
    inputBox: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        // borderWidth: 1,
        borderRadius: 7,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
        marginBottom: SIZES.height * .02,
    },

    input1: {
        height: SIZES.height * .05,
        paddingVertical: SIZES.height * .01,
        fontSize: 13,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        width: SIZES.width * .8,
    },

    bottomSheet: {
        // height: SIZES.height * .6,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'center',
    },

    type_box: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .02,
    },

    type: {
        // paddingVertical: SIZES.height * .01,
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        // borderWidth: 1,
        marginBottom: SIZES.height * .01,
        // width: SIZES.width * .8,
    },
})
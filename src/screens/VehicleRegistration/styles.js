import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        alignItems: "center",
        justifyContent: 'center',
    },

    image_box: {
        width: SIZES.width * .7,
        height: SIZES.height * .2,
    },

    image: {
        width: SIZES.width * .7,
        height: SIZES.height * .2,
        tintColor: "#0B53BD",
    },

    container1: {
        width: SIZES.width,
        height: SIZES.height * .9,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
   
    titleBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .04,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.black,
    },

   
    text: {
        fontFamily: FONTS.light,
        fontSize: 12,
        marginBottom: -4,
        color: "#959595",
        textAlign: 'center'
    },

  
    box: {
        width: SIZES.width * .9,
        // marginTop: SIZES.height * .1,
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
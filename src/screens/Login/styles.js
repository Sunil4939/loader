import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

   
    titleBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .04,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
    },

    btnContainer: {
        alignItems: "center",
        marginVertical: SIZES.height * .04,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    india: {
        width: SIZES.width * .07,
        height: SIZES.height * .035,
        marginHorizontal: SIZES.width * .02,
    },


  
    inputBox: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
    },

 
    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        color: COLORS.blue,
    },

    code: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        // marginBottom: -4,
        color: COLORS.gray20,
    },

    input: {
        width: SIZES.width * .72,
        height: SIZES.height * .06,
        // borderWidth: 1.3,
        paddingLeft: SIZES.width * .03,
        borderRadius: 8,
        borderColor: COLORS.gray20,
        paddingVertical: SIZES.height * .01,
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.black,
    },

    image_container: {
        width: SIZES.width,
        height: SIZES.height * .5,
        alignItems: "center",
        justifyContent: "flex-end",
    },

   
    image_box: {
        width: SIZES.width,
        height: SIZES.height * .22,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: SIZES.width * .9,
        height: SIZES.height * .6,
    },

    login_bg: {
        width: SIZES.width * .96,
        height: SIZES.height * .12,
        position: 'absolute',
        bottom: 0,
    },
})
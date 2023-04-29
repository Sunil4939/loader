import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
   
    image_box: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    image: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
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
        fontSize: 16,
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
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -6
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
    },

   
})
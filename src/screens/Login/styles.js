import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
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

    row: {
        width: SIZES.width * .78,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontFamily: FONTS.light,
        fontSize: 12,
        marginBottom: -4,
        color: "#959595",
        textAlign: 'center'
    },

  
   
    india: {
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
    },

    box: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .1,
        marginBottom: SIZES.height * .04,
    },

 
    label: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -6
    },

    input: {
        width: SIZES.width * .8,
        height: SIZES.height * .05,
        // borderBottomWidth: 1.3,
        paddingLeft: SIZES.width * .03,
        borderRadius: 8,
        borderColor: COLORS.gray20,
        paddingVertical: SIZES.height * .01,
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.black,
    },

    bottom_box: {
        width: SIZES.width,
        height: SIZES.height * .15,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        alignItems: "center",
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
    },

    support: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.primary,
    },

})
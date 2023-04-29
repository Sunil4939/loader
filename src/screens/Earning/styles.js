import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.lightGray10,
        // alignItems: 'center',
    },

    tabBarLabelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        lineHeight: 24,
        // color: "#777777",
    },
    box: {
        width: SIZES.width * .94,
        backgroundColor: COLORS.white,
        marginTop: SIZES.height * .02,
        borderRadius: 5,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    date_row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D0D0D0',
        paddingVertical: SIZES.height * .015,
        paddingHorizontal: SIZES.width * .05,
        justifyContent: 'space-between',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.height * .015,
        paddingHorizontal: SIZES.width * .05,
        // marginTop: SIZES.height * .02,
        justifyContent: 'space-between',
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    pay_release: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -3,
        color: "#FF2626",
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -3,
        color: "#969393",
    },
    date: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        marginBottom: -3,
        color: "#976A6A",
    },
    earning: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        marginBottom: -3,
        color: COLORS.black,
        marginLeft: SIZES.width * .03,
    },

    btn: {
        width: SIZES.width * .1,
        // height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },
    
})
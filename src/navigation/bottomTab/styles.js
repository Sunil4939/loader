import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    icons: {
        marginBottom: -5,
    },

    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        // color: COLORS.black,
    },

  })
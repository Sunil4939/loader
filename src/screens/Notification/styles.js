import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
   
    heading:{
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: '#353638',
        marginBottom: -5,
    },
    notioficationBox:{
        marginHorizontal: width * .03,
        marginVertical: height * .02,
    },
  
})
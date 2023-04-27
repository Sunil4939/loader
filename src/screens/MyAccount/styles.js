import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
   

    userProfile:{
        width: width * .32,
        height: height * .16,
        // borderRadius: 100,
    },
    userProfileBox:{
        width: width * .32,
        height: height * .16,
        borderRadius: 100,
        overflow:'hidden',
        // borderWidth: 1,
    },
    profileBox:{
        alignItems:'center',
        marginVertical: height * .03,
    },
    Edit:{
        width: width * .06,
        height: height * .03,
        position:'absolute',
        right:7,
        bottom: height * .015,
        tintColor: COLORS.blue,
    },
    userDetails:{
        alignItems: 'center',
        borderBottomColor:'#ADA4A5',
        borderBottomWidth:1,
        paddingBottom: height * .03,
    },
    userName:{
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
    },
    text:{
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    profileIcon:{
        width: width * .08,
        height: height * .04,
        marginRight: width * .03,
        tintColor:COLORS.blue,
    },
   btnContainer:{
    marginTop: height * .02,
    marginBottom: height * .1,
    alignItems:'center',
   },
    BtnRow:{
        flexDirection: 'row',
        marginTop: height * .01,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: width * .04,
        backgroundColor: COLORS.white,
        height: height * .06,
        // borderWidth: 1,
    },
    row:{
        flexDirection: 'row',
        alignItems:'center',
    },
   
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    arrow:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black, 
        marginBottom: -2,
    },

})
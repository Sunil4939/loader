import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
    },

    alert: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        elevation: 4,
        borderColor: COLORS.black,
        borderRadius: 10,
        marginVertical: SIZES.height * .02,
        paddingVertical: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .03,
    },
    alert_row: {
        width: SIZES.width * .5,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "space-between",
        // marginVertical: SIZES.height * .02,
    },

    
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      row2: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      image_box: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
        borderRadius: SIZES.width * .1,
        backgroundColor: "#E9E6E6",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
      },
    
      box: {
        width: SIZES.width * .34,
        alignItems: 'center',
      },
    
      profile: {
        width: SIZES.width * .14,
        height: SIZES.height * .07,
      },
    
     
      dot: {
        width: 8,
        height: 8,
        backgroundColor: "#34DD3A",
        marginRight: 3,
        borderRadius: 8,
      },
      
    
      amount: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: "#5F5A5A",
        marginBottom: -3,
      },
      mode: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -3,
      },
      name: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -3,
      },
      text: {
        fontFamily: FONTS.medium,
        fontSize: 7,
        color: "#797171",
        marginBottom: -1,
      },
      id: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        color: "#AC9B9B",
        marginBottom: -2,
      },
    
      toggleContainerStyle: {
        width: SIZES.width * .14,
        height: SIZES.height * .03,
        borderRadius: 25,
        padding: 3,
        marginTop: 3,
        // borderWidth: 1,
        // borderColor: '#6A6664',
    },


    toggleCircleStyle: {
        width: 15,
        height: 15,
        borderRadius: 20,
    },

    



   
    box_btn: {
        width: SIZES.width * .43,
        height: SIZES.height * .12,
        backgroundColor: COLORS.white,
        elevation: 10,
        borderRadius: 12,
        paddingLeft: SIZES.width * .05,
        justifyContent: 'center', 
        marginVertical: SIZES.height * .01,
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    box_container: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    box_total: {
        fontFamily: FONTS.semiBold,
        fontSize: 24,
        marginBottom: -6,
        color: COLORS.primary,
    },
    box_title: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -3,
        color: "#926C6C",
        paddingVertical: 3,
    },

    title1: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        marginBottom: -3,
        color: "#926C6C",
        marginVertical: SIZES.height * .03,
    },

    

    

    wallet_btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: SIZES.height * .02,
    },
    wallet_row: {
        width: SIZES.width * .8,
        flexDirection: 'row',
    },
    wallet_text: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        marginBottom: -3,
        color: COLORS.white,
    },
    wallet_amount: {
        fontFamily: FONTS.medium,
        fontSize: 20,
        marginBottom: -3,
        color: COLORS.white,
    },
    wallet_box: {
        marginLeft: SIZES.width * .02,
    },
})
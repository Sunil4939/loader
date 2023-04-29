import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import Icons from '../Icons'

const HeaderLeft = ({ navigation, color }) => {
    return (
      <TouchableOpacity style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Icons
          name={"back"}
          size={25}
          color={color}
        />
      </TouchableOpacity>
    )
  }

  HeaderLeft.defaultProps = {
   color: COLORS.black,
  }

export default HeaderLeft;

const styles = StyleSheet.create({

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },
})
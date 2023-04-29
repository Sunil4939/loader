import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { COLORS } from '../../constants';
import Icons from '../../component/Icons';

const AddPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            
            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate("AddDriver")}
            >
                <Text style={styles.btn_text}>Add new driver</Text>
                <Icons name={'right'} size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.hr_line} />

            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate("AddVehicle")}
            >
                <Text style={styles.btn_text}>Add new vehicel</Text>
                <Icons name={'right'} size={25} color={COLORS.black} />
            </TouchableOpacity>
        </View>
    )
}

export default AddPost;

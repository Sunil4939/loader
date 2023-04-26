import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { COLORS, icons, images, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
// import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";
import ImageCropPicker from "react-native-image-crop-picker";
import HeaderLeft from "../../component/HeaderLeft";
import { connect } from "react-redux";
import Icons from "../../component/Icons";
const { width, height } = Dimensions.get('window')


const EditProfile = ({ navigation, route, }) => {
    // const user_data = route.params.userdata;
    // const userProfile = user_data.profilePic ? {uri : http2 + user_data.profilePic} : images.profile;

    // console.log("user data : ", userProfile) 
    
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [profile, setProfile] = useState(images.profile);

    const [postData, setPostData] = useState({
        firstName: null,
        lastName: null,
        email: null,
        phoneNo: null,
        profilePic: "",
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        // UpdateUserApi(postData, navigation)
        // console.log("postData : ", postData)
    }




    const selectProfile = async () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            handleChange("profilePic", {
                uri: image.path,
                name: "profile.jpeg",
                type: image.mime
            })
            setProfile({uri: image.path});
        }).catch((err) => console.log(err));
    };
   


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.profileBox}>
                    <TouchableOpacity onPress={selectProfile}>
                        <View style={styles.userProfileBox}>
                            <Image source={profile} style={styles.userProfile} resizeMode='contain' />
                        </View>
                        <View >
                            <Image source={icons.edit} style={styles.Edit} resizeMode='contain' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Contact Details</Text>
                    <View style={styles.row1}>
                        <TextInput style={styles.input1} placeholder="first name*" value={postData.firstName} placeholderTextColor={'#A7A7A7'}
                            onChangeText={(text) => handleChange("firstName", text)} />
                        <TextInput style={styles.input1} placeholder="last name*" value={postData.lastName} placeholderTextColor={'#A7A7A7'}
                            onChangeText={(text) => handleChange("lastName", text)} />
                    </View>
                    <TextInput style={styles.input} placeholder="Email*" value={postData.email} placeholderTextColor={'#A7A7A7'}
                        onChangeText={(text) => handleChange("email", text)} />
                    <TextInput style={styles.input} placeholder="Mobile Number*"
                        value={postData.phoneNo} placeholderTextColor={'#A7A7A7'}
                        editable={false}
                        keyboardType="numeric" />
                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput style={styles.input} placeholder="dob*" value={postData.dob} placeholderTextColor={'#A7A7A7'} />
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Pin Code*" value="345676" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                    <TextInput style={styles.input} placeholder="Address*" value="Amar road beside local market" placeholderTextColor={'#A7A7A7'} />
                    <TextInput style={styles.input} placeholder="Locality*" value="Mall Road" placeholderTextColor={'#A7A7A7'} />
                    <View style={styles.inputRow}>
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="City*" value="Bhopal" placeholderTextColor={'#A7A7A7'} />
                        <TextInput style={[styles.input, { width: width * .42, }]} placeholder="State*" value="Madhya Pradesh" placeholderTextColor={'#A7A7A7'} />
                    </View>
                    <View style={styles.BtnRow}>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.black, borderWidth: 0, }]}>
                            <Text style={[styles.btnTxt, { color: COLORS.white, }]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>Office</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BtnRow}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            tintColors={{ true: 'black', false: 'black' }}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={styles.checkBox}
                        />
                        <Text style={styles.text}> Make this as my default address</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
                        <Text style={styles.addBtnText}>Done</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
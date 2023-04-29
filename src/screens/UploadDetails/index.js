import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, SIZES, images,icons } from '../../constants';
import Icons from '../../component/Icons';
import * as Progress from 'react-native-progress';
import ImageCropPicker from 'react-native-image-crop-picker';
import RoundedButton from '../../component/Buttons/RoundedButton';
import { BottomSheet } from 'react-native-btr'

const UploadDetails = ({ navigation }) => {
    const [checked, setChecked] = useState("second");
    const [image, setImage] = useState();

    const [type, setType] = useState('')
    const [city, setCity] = useState('')

    const [typeBottom, setTypeBottom] = useState(false)
    const [cityBottom, setCityBottom] = useState(false)
    const cities = ["Bhopal", "Indore", "Sehor", "Jabalpur", "Mumbai", "Delhi"]
    const types = ["Tata Ace", "Tata 407", "Super Ace 8ft", "3 Wheeler", "2 Wheeler", "Other"]


    const selectImage = async () => {
        console.log("select image")
        ImageCropPicker.openPicker({
            width: SIZES.width * .7,
            height: SIZES.height * .26,
            cropping: true
        }).then(image => {
            // console.log(image.path)
            setImage({ uri: image.path });
        }).catch((err) => console.log(err));
    };
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            
            <View style={styles.row}>
                <Text style={styles.label}>RC</Text>
                <Text style={styles.label}>PUC</Text>
            </View>

            <View style={styles.center}>
                <Progress.Bar
                    progress={checked == "first" ? .3 : .63}
                    width={SIZES.width}
                    height={4}
                    style={styles.progressBar}
                    color={'#4FB5FF'}
                    unfilledColor={'#F1F1F1'}
                    borderColor={'#F1F1F1'}
                    showsText={true}
                />
                <View style={{ ...styles.radio_box, left: SIZES.width * .27 }}>
                    <TouchableOpacity style={styles.radio}
                        onPress={() => setChecked("first")}
                    >
                    </TouchableOpacity>
                  
                </View>
                <View style={{ ...styles.radio_box, left: SIZES.width * .6 }}>
                    <TouchableOpacity style={styles.radio}
                        onPress={() => setChecked("second")}
                    >
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                        
                        <View>
                            <Text style={styles.label}>Driver’s Number</Text>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.input1}
                                    maxLength={10}
                                    keyboardType='numeric'
                                    placeholderTextColor={COLORS.gray20}
                                />
                                <Image source={icons.userIcon} style={styles.user} resizeMode='contain' />
                            </View>

                        </View>
                      
                        <View>
                            <Text style={styles.label}>City</Text>
                            <TouchableOpacity style={styles.inputBox}
                                onPress={() => setCityBottom(!cityBottom)}
                            >
                                <TextInput
                                    style={styles.input1}
                                    placeholderTextColor={COLORS.gray20}
                                    editable={false}
                                    value={city}
                                />
                                <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
                            </TouchableOpacity>
                            <BottomSheet
                                visible={cityBottom}
                                onBackButtonPress={() => setCityBottom(!cityBottom)}
                                onBackdropPress={() => setCityBottom(!cityBottom)}
                            >
                                <View style={styles.bottomSheet}>
                                    <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                        <Text style={{ ...styles.input, color: "#848484", }}>City</Text>
                                    </View>
                                    <View style={styles.type_box}>
                                        {cities.map((item, index) => (
                                            <TouchableOpacity key={index}
                                                onPress={() => { setCity(item), setCityBottom(!cityBottom) }}
                                            >
                                                <Text style={styles.type}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                        <View>
                            <Text style={styles.label}>Vehicle Type</Text>
                            <TouchableOpacity style={styles.inputBox}
                                onPress={() => setTypeBottom(!typeBottom)}
                            >
                                <TextInput
                                    style={styles.input1}
                                    placeholderTextColor={COLORS.gray20}
                                    editable={false}
                                    value={type}
                                />
                                <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
                            </TouchableOpacity>

                            <BottomSheet
                                visible={typeBottom}
                                onBackButtonPress={() => setTypeBottom(!typeBottom)}
                                onBackdropPress={() => setTypeBottom(!typeBottom)}
                            >
                                <View style={styles.bottomSheet}>
                                    <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                        <Text style={{ ...styles.input, color: "#848484", }}>Vehicle Type</Text>
                                    </View>
                                    <View style={styles.type_box}>
                                        {types.map((item, index) => (
                                            <TouchableOpacity key={index}
                                                onPress={() => { setType(item), setTypeBottom(!typeBottom) }}
                                            >
                                                <Text style={styles.type}>{item}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                        <View>
                            <Text style={styles.label}>Vehicle number</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={COLORS.gray20}
                            />
                        </View>
                    </View>
                <Text style={styles.title}>Upload Registration Certificate</Text>

                <TouchableOpacity style={styles.image_box}
                    onPress={selectImage}
                >
                    {image ?
                        <>
                            <Image source={image} style={styles.image} resizeMode='stretch' />
                            <TouchableOpacity
                                style={styles.close_btn}
                            >
                                <Icons name={"close"} size={20} color={COLORS.white} />
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <Text style={styles.upload}>Upload here</Text>
                            <Icons name={"upload"} size={40} color={"#999999"} />
                        </>
                    }
                </TouchableOpacity>

                <View>
                    <Text style={styles.title1}>Tip</Text>
                    <Text style={styles.text}>Make sure things like Names, Numbers,
                        Address are clearly visible while talking photo</Text>
                </View>

            </View>
            <View style={styles.btn_box}>
                <RoundedButton
                    // backgroundColor={image ? COLORS.primary : "#BFBFC1"}
                    // textColor={image ? COLORS.white : "#707070"}
                    // disabled={image ? false : true}
                    style={{ height: SIZES.height * .07,  }}
                // onPress={() => navigation.navigate("UploadDetails")}
                >
                    PROCEED
                </RoundedButton>
            </View>

        </ScrollView>
    )
}

export default UploadDetails;

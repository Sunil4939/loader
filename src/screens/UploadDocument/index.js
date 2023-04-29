import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { COLORS, SIZES, images } from '../../constants';
import Icons from '../../component/Icons';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import ImageCropPicker from 'react-native-image-crop-picker';
import RoundedButton from '../../component/Buttons/RoundedButton';
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const UploadDocument = ({ navigation }) => {
    const [checked, setChecked] = useState("first");
    const [image, setImage] = useState();

    const selectImage = async () => {
        console.log("select image")
        ImageCropPicker.openPicker({
            width: SIZES.width * .7,
            height: SIZES.height * .4,
            cropping: true
        }).then(image => {
            // console.log(image.path)
            setImage({ uri: image.path });
        }).catch((err) => console.log(err));
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            {/* <View style={{ flex: 1 }}>
                <ProgressSteps>
                    <ProgressStep label="First Step" nextBtnTextStyle={{color: COLORS.green10, borderWidth: 1, width: SIZES.width * .3,}}
                    onNext={() => navigation.navigate("AboutUs")}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 1!</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Second Step">
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 2!</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep >
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 3!</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View> */}
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
                    {/* <RadioButton
                        value="first"
                        color={'#96B1FE'}
                        status={checked == "first" ? 'checked' : 'unchecked'}
                        onPress={() => setChecked("first")}
                    /> */}
                </View>
                <View style={{ ...styles.radio_box, left: SIZES.width * .6 }}>
                    <TouchableOpacity style={styles.radio}
                        onPress={() => setChecked("second")}
                    >
                    </TouchableOpacity>

                </View>
                <Text style={styles.title}>Upload Pollution certificate.</Text>

                {/* <TouchableOpacity style={styles.camera_btn}
                    onPress={selectImage}
                >
                    <Image source={images.camera} style={styles.camera} resizeMode='contain' />
                </TouchableOpacity> */}

                {/* <Text style={styles.note}>Note :  Please click the photo clear name and address</Text> */}

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
                            <Icons name={"upload"} size={50} color={"#999999"} />
                        </>
                        // <Image source={images.camera} style={styles.camera} resizeMode='contain' />
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
                    backgroundColor={image ? COLORS.primary : "#BFBFC1"}
                    textColor={image ? COLORS.white : "#707070"}
                    disabled={!image ? false : true}
                    style={{ height: SIZES.height * .07,  }}
                onPress={() => navigation.navigate("UploadDetails")}
                >
                    PROCEED
                </RoundedButton>
            </View>

        </View>
    )
}

export default UploadDocument;

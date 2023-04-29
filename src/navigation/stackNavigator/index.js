import React, { useEffect } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { COLORS, icons, images, SIZES } from '../../constants';
import styles from "./styles";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../../screens/Home';
import Icons from '../../component/Icons';
import HeaderLeft from '../../component/HeaderLeft';
import MyAccount from '../../screens/MyAccount';
import EditProfile from '../../screens/EditProfile';
import AboutUs from '../../screens/AboutUs';
import TermsAndCondition from '../../screens/TermsAndCondition';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import AddPost from '../../screens/AddPost';
import UploadDocument from '../../screens/UploadDocument';
import RapidoManager from '../../screens/RapidoManager';
import Fleet from '../../screens/Fleet';
import Location from '../../screens/Location';
import OrderDetails from '../../screens/OrderDetails';
import Earning from '../../screens/Earning';
import AddDriver from '../../screens/AddDriver';
import AddVehicle from '../../screens/AddVehicle';
import VehicleRegistration from '../../screens/VehicleRegistration';
import UploadDetails from '../../screens/UploadDetails';

const Stack = createStackNavigator();

const HeaderBox = ({ navigation, title, bookingStatus, }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icons name={"back"} size={25} color={"#646464"} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Trip CRN56787</Text>
          <Text style={styles.status}>Bokking confirmed</Text>
        </View>
      </View>
      <View style={{ ...styles.headerRow, marginRight: SIZES.width * .03, }}>
        <TouchableOpacity style={styles.backBtn}>
          <Icons name={"info"} size={20} color={COLORS.primary} />
          <Text style={styles.btn_text}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtn}>
          <Icons name={"share"} size={20} color={COLORS.primary} />
          <Text style={styles.btn_text}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const bottomBarCondition = (navigation, route, nm) => {
  if (getFocusedRouteNameFromRoute(route) === nm || getFocusedRouteNameFromRoute(route) === undefined) {
    navigation.setOptions({
      tabBarStyle: {
        backgroundColor: COLORS.white,
        height: SIZES.height * .09,
        paddingBottom: 8,
        borderTopWidth: 0,
      }
    })
  }
  else {
    navigation.setOptions({
      tabBarStyle: { display: 'none' }
    });
  }
}


const HomeStack = ({ navigation, route, cart }) => {
  useEffect(() => {
    bottomBarCondition(navigation, route, "Home")
  }, [route])
  return (
    <Stack.Navigator
      // initialRouteName='Home'
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}>
      <Stack.Screen name="Home" component={Home}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawer_btn}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icons
                name={"menu"}
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image source={images.logo1} style={styles.logo1} resizeMode='contain' />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ ...styles.drawer_btn, marginLeft: 0, marginRight: SIZES.width * .02, }}
              onPress={() => navigation.navigate("RapidoManager")}
            >
              <Icons
                name={"calendar1"}
                size={25}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Fleet" component={Fleet}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawer_btn}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icons
                name={"menu"}
                size={30}
                color={COLORS.black}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: "Fleet",
        })}
      />
      <Stack.Screen name="RapidoManager" component={RapidoManager}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.drawer_btn}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icons
                name={"menu"}
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: "Rapido Manager",
          headerTitleStyle: styles.headerTitle2,
        })}
      />
      <Stack.Screen name="UploadDocument" component={UploadDocument}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle:{ ...styles.headerTitle2, marginLeft: SIZES.width * -.05 },
          headerTitle: "Upload Documents",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} color={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="UploadDetails" component={UploadDetails}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle:{ ...styles.headerTitle2, marginLeft: SIZES.width * -.05 },
          headerTitle: "Upload Details",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} color={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="AddPost" component={AddPost}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Add Post",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="MyAccount" component={MyAccount}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "My Account",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="EditProfile" component={EditProfile}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Edit Profile",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="AboutUs" component={AboutUs}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "About us",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Terms & conditions",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Privacy policy",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name='OrderDetails' component={OrderDetails}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle1,
          headerTitle: "Delhivery - Domlur",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen name='Location' component={Location}
        options={() => ({
          headerShown: false
        })}
      />
      <Stack.Screen name="Earning" component={Earning}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle1,
          headerTitleStyle: { ...styles.headerTitle2, marginLeft: SIZES.width * -.05 },
          headerTitle: "Rakesh Kumar",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} color={COLORS.white} />
          ),

          headerRight: () => (
            <TouchableOpacity style={{ ...styles.drawer_btn, marginLeft: 0, marginRight: SIZES.width * .02, }}
            onPress={() => navigation.navigate("RapidoManager")}
            >
              <Icons
                name={"calendar1"}
                size={25}
                color={COLORS.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name='AddDriver' component={AddDriver}
        options={({ navigation }) => ({
          headerStyle: styles.headerStyle1,
          headerTitleStyle: { ...styles.headerTitle2, marginLeft: SIZES.width * -.05 },
          headerTitle: "Add Driver",
          headerLeft: () => (
            <HeaderLeft navigation={navigation} color={COLORS.white} />
          ),
        })}
      />
      <Stack.Screen name="AddVehicle" component={AddVehicle}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="VehicleRegistration" component={VehicleRegistration}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}


export {
  HomeStack,
}

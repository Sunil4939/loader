import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import { COLORS, FONTS, SIZES } from '../constants';
import { LogBox, StyleSheet } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Loading from "../component/Loading"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN } from '../redux/types';
import HeaderLeft from '../component/HeaderLeft';
import DrawerContent from '../screens/DrawerContent';
import { HomeStack } from '../navigation/stackNavigator';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = ({ token }) => {

    const [rootLoading, setRootLoading] = useState(true)
    const dispatch = useDispatch()

    token = "null"

    const preLoad = async () => {
        await AsyncStorage.getItem('@USER_TOKEN').then(value => {
            // console.log(value)
            if (value) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: value
                })
                setRootLoading(false)
            } else {
                setRootLoading(false)
            }

        })
            .catch(err => console.log("Root error : ", err))

    }

    useEffect(() => {
        preLoad()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    //     const [token, setToken] = useState(null)

    return (
        <>
            {rootLoading ?
                <Loading />
                :
                token === null ?
                    < Stack.Navigator
                        screenOptions={() => ({
                            // headerShown: false,
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        })}
                    >
                        <Stack.Screen name="Login" component={Login}
                            options={({ navigation }) => ({
                                headerShown: false,
                            })}
                        />
                        <Stack.Screen name="Register" component={Register}
                            options={({ navigation }) => ({
                                headerShown: false,
                            })}
                        />
                        <Stack.Screen name="Otp" component={Otp}
                            options={({ navigation }) => ({
                                headerStyle: styles.headerStyle,
                                headerTitleStyle: styles.headerTitle,
                                headerTitle: "Otp verification",
                                headerLeft: () => (
                                    <HeaderLeft navigation={navigation} />
                                ),
                            })}
                        />

                    </Stack.Navigator>
                    :
                    <Drawer.Navigator
                        drawerContent={props => <DrawerContent {...props} />}
                    >
                        <Drawer.Screen name="HomeStack" component={HomeStack}
                            options={() => ({
                                headerShown: false,
                            })}
                        />
                    </Drawer.Navigator>

            }
        </>
    );
}
const mapStateToProps = (state) => ({
    token: state.auth.token,
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Root);

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: COLORS.white,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)'
    },


    headerTitle: {
        fontFamily: FONTS.medium,
        fontSize: 17,
        color: COLORS.black,
        marginBottom: -6,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },

})
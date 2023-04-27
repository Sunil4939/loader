import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, LOADING, USER_DATA, USER_ID } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
// import { GetAllPolicyApi } from "./policyAction";

export const SignUpApi = (postData, navigation) => dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.post("signUp", postData)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: USER_DATA,
                    payload: response.data.data
                })
                RNToasty.Success({
                    title: "Create account successfully",
                    duration: 2,
                });
                navigation.navigate('Login')
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};

export const LoginApi = (postData, navigation) => dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post("logIn", postData)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: USER_ID,
                    payload: response.data.data._id
                })
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
                    title: "Otp send successfully",
                    duration: 2,
                });
                navigation.navigate("Otp", postData)
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Info({
                    title: "Please create new account",
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            if (error.response.data.message) {
                RNToasty.Normal({
                    title: "Please create new account",
                    duration: 2,
                });
            }

        })
};


export const VerifyOtpApi = (postData) => dispatch => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.post(`signUp/otpVerify`, postData)
        .then(async response => {
            if (response.data.success) {
                await AsyncStorage.setItem('@USER_TOKEN', response.data.token);
                await AsyncStorage.setItem("@USER_ID", response.data.data._id)
                RNToasty.Success({
                    title: "Login successfully",
                    duration: 2,
                });
                // dispatch(callApi())
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.token
                })
                dispatch({
                    type: LOADING,
                    payload: false,
                });
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const LogoutApi = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: null
    })
    AsyncStorage.removeItem('@USER_TOKEN')
    AsyncStorage.removeItem('@USER_ID')
}

export const GetUserApi = () => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`getUserById/${userId}`)
        .then(async response => {
            if (response.data.success) {
                dispatch({
                    type: USER_DATA,
                    payload: response.data.data
                })
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });

                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Error({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const UpdateUserApi = (postData, navigation) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    postData = await objectToFormData(postData)
    // dispatch({
    //     type: LOADING,
    //     payload: true,
    // });
    http.put(`updateUser/${userId}`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(async response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                navigation.goBack()
                RNToasty.Success({
                    title: "Edit profile successfully",
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Error({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

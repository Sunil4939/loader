import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://server.skcodehub.com/api/'
export const http2 = 'https://server.skcodehub.com/'

const http = axios.create({
	baseURL: 'https://server.skcodehub.com/api/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		let token = await AsyncStorage.getItem('@USER_TOKEN');
	    // if(token) token = JSON.parse(token).token
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject("Api error ",error);
	},
);
export default http;

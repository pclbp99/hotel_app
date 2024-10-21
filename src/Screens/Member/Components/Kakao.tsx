import React, {useEffect, useState} from 'react';

import {
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import  * as KakaoLogin from '@react-native-seoul/kakao-login';

import TextKR from '../../../../TextKR';
import styles from '../styles.js';
import kakao from '../../../Assets/Icons/kakao.png';

const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={login}>
            <View style={[styles.kakaoBtn, styles.loginBtnCommon]}>
                <Image source={kakao} />
                <TextKR style={styles.kakaoTxt}>카카오 로그인</TextKR>
            </View>
        </TouchableWithoutFeedback>
    );
}

const login = () => {
    KakaoLogin.login().then((result) => {
        console.log("Login Success", JSON.stringify(result));
        getProfile();
    }).catch((error) => {
        if (error.code === 'E_CANCELLED_OPERATION') {
            console.log("Login Cancel", error.message);
        } else {
            console.log(`Login Fail(code:${error.code})`, error.message);
        }
    });
};
  
const getProfile = () => {
    KakaoLogin.getProfile().then((result) => {
        console.log("GetProfile Success", JSON.stringify(result));
    }).catch((error) => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
    });
};

export default Login;
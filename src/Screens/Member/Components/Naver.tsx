import React, {useEffect, useState} from 'react';

import {
    SafeAreaView,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import NaverLogin, {
    NaverLoginResponse,
    GetProfileResponse,
} from '@react-native-seoul/naver-login';


import TextKR from '../../../../TextKR';
import styles from '../../../Screens/Member/styles.js';
import naver from '../../../Assets/Icons/naver.png';

const consumerKey = 'WtDXdQLlZ8EVX8TiXXnm';
const consumerSecret = 'lpsX3Kqiu_';
const appName = 'com.hotel';

const Naver = () => {
  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
    });
  }, []);

  const [success, setSuccessResponse] = useState<NaverLoginResponse['successResponse']>();

  const [failure, setFailureResponse] = useState<NaverLoginResponse['failureResponse']>();
  const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

  const login = async (): Promise<void> => {
    const { failureResponse, successResponse } = await NaverLogin.login();
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profileResult = await NaverLogin.getProfile(success!.accessToken);
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };

  return(

      <TouchableWithoutFeedback onPress={login}>
          <View style={[styles.naverBtn, styles.loginBtnCommon]}>
              <Image source={naver} style={{marginRight:5}}/>
              <TextKR style={styles.naverTxt}>네이버 로그인</TextKR>
          </View>
      </TouchableWithoutFeedback>

  )
}



export default Naver;
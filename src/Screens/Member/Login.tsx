import React from 'react';

import {
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import styles from '../../Screens/Member/styles.js';

import SubHeader from '../../Components/SubHeader';
import LoginBackground from '../../Assets/Images/Login_Background.jpg';
import LoginLogo from '../../Assets/Icons/login_logo.png';
import kakao from '../../Assets/Icons/kakao.png';
import naver from '../../Assets/Icons/naver.png';
import EmailLogin from './EmailLogin';
import NaverLogin from './Components/Naver';
import KakaoLogin from './Components/Kakao';

const { height: screenHeight } = Dimensions.get('window');

const Login = () => {

    const navigation = useNavigation();

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            
            <View style={styles.subHeader}>
                <SubHeader title="로그인" />
            </View>
            
            <View style={styles.subContainer}>
                <ImageBackground source={LoginBackground} resizeMode="cover" style={stylesIn.loginBack}>
                    <View style={styles.contentContainer}>
                        <View style={styles.logoContainer}>
                            <Image source={LoginLogo} />
                        </View>

                        <View style={styles.buttonContainer}>
                            {/* <TouchableWithoutFeedback>
                                <View style={[styles.kakaoBtn, styles.loginBtnCommon]}>
                                    <Image source={kakao} />
                                    <TextKR style={styles.kakaoTxt}>카카오 로그인</TextKR>
                                </View>
                            </TouchableWithoutFeedback> */}

                            <KakaoLogin />

                            {/* <TouchableWithoutFeedback>
                                <View style={[styles.naverBtn, styles.loginBtnCommon]}>
                                    <Image source={naver} style={{marginRight:5}}/>
                                    <TextKR style={styles.naverTxt}>네이버 로그인</TextKR>
                                </View>
                            </TouchableWithoutFeedback> */}

                            <NaverLogin />

                            <TouchableWithoutFeedback onPress={() => navigateTo(EmailLogin)}>
                                <View style={[styles.loginBtnCommon, styles.emailBtn]}>
                                    <TextKR style={styles.naverTxt}>이메일 로그인</TextKR>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const stylesIn = StyleSheet.create({
    loginBack: {
        width:'100%',
        height:screenHeight - 70,
        flex: 1,
        justifyContent: 'center',
    },

});

export default Login;
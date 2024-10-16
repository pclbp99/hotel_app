import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    Linking
} from 'react-native';

import { WebView } from 'react-native-webview';
import Clipboard from '@react-native-clipboard/clipboard';
import DeviceInfo from 'react-native-device-info';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/About/styles.js';

import SubHeader from '../../Components/SubHeader';
import copy from '../../Assets/Icons/copy.png';
import arrow from '../../Assets/Icons/bus_arrow.png';

const onMessage = (event) => {
    const message = event.nativeEvent.data;
    Alert.alert('마커 클릭됨', message);
};

const Directions = () => {

    const dirInfo = [
        {
            address: '부산 동래구 사직로 45',
            tel: '051-123-4567~8',
            email: 'info@rn-hotel.com',
            lat: 35.19497,
            lng: 129.061022,
        },
    ];

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Alert.alert('주소 복사됨', '주소가 클립보드에 복사되었습니다.');
    };

    // 구글 지도 실행 함수
    const openGoogleMaps = async () => {
        const { lat, lng } = dirInfo[0]; // 좌표 정보 가져오기

        const urlScheme = `geo:${lat},${lng}?q=${lat},${lng}`;
        const urlWeb = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`; 

        const isGoogleMapsInstalled = await Linking.canOpenURL(urlScheme);

        if (isGoogleMapsInstalled) {
            // 구글 지도 앱이 설치되어 있으면 앱을 실행
            Linking.openURL(urlScheme);
        } else {
            // 앱이 없으면 웹사이트로 이동
            Linking.openURL(urlWeb);
        }
    };

    // 네이버 지도 실행 함수
    const openNaverMaps = async () => {
        const { lat, lng } = dirInfo[0]; 

        const urlScheme = `nmap://place?lat=${lat}&lng=${lng}&name=RN_HOTEL&appname=com.yourapp`;
        const urlWeb = `https://naver.me/FVPFf0Wf`;


        const isNaverMapsInstalled = await Linking.canOpenURL(urlScheme);

        if (isNaverMapsInstalled) {
            // 네이버 지도 앱이 설치되어 있으면 앱을 실행
            Linking.openURL(urlScheme);
        } else {
            // 앱이 없으면 웹사이트로 이동
            Linking.openURL(urlWeb);
        }
    };

    return(
        <SafeAreaView>
            <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="오시는길" />
                </View>
                <View style={styles.commonPadding}>
                    <View style={styles.webviewBoxStyle}>
                        <WebView
                            style={styles.webviewStyle}
                            source = {{ uri: 'https://kangel722.mycafe24.com/map_api.html'}}
                            onMessage={onMessage}
                            originWhitelist={['*']}
                        />
                    </View>
                    <View style={styles.mapInfoBox}>
                        <View style={styles.mapInfoEach}>
                            <TextEN style={styles.mapInfoTit}>ADDRESS</TextEN>
                            <View style={styles.mapAdrView}>
                                <TextKR>{dirInfo[0].address}</TextKR>
                                <TouchableOpacity
                                    style={{marginLeft:10}}
                                    onPress={() => copyToClipboard(dirInfo[0].address)}
                                >
                                    <Image source={copy} />
                                </TouchableOpacity>
                            </View>  
                        </View>

                        <View style={styles.mapInfoEach}>
                            <TextEN style={styles.mapInfoTit}>TEL</TextEN>
                            <View>
                                <TextKR>{dirInfo[0].tel}</TextKR>
                            </View>  
                        </View>

                        <View style={styles.mapInfoEach}>
                            <TextEN style={styles.mapInfoTit}>E-MAIL</TextEN>
                            <View>
                                <TextKR>{dirInfo[0].email}</TextKR>
                            </View>  
                        </View>

                        <View style={styles.mapBtnsView}>
                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnSub]}
                                onPress={openGoogleMaps}
                            >
                                <TextKR style={[styles.btnTxt, {color:'#fff'}]}>구글 지도로 확인</TextKR>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnLine]}
                                onPress={openNaverMaps}
                            >
                                <TextKR style={[styles.btnTxt, {color:'#837166'}]}>네이버 지도로 확인</TextKR>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.busInfoView}>
                        <TextKR style={styles.busInfoTit}>셔틀버스 운행 안내</TextKR>
                        <View>
                            <View style={styles.busInfoLine}>
                                <TextKR>RN호텔 11:30 출발</TextKR>
                                <Image source={arrow} style={styles.busInfoArr}/>
                                <TextKR>부산역 12:00 출발</TextKR>
                                <Image source={arrow}  style={styles.busInfoArr}/>
                                <TextKR>RN호텔 12:35 도착</TextKR>
                            </View>

                            <View style={styles.busInfoLine}>
                                <TextKR>RN호텔 14:20 출발</TextKR>
                                <Image source={arrow} style={styles.busInfoArr}/>
                                <TextKR>부산역 15:00 출발</TextKR>
                                <Image source={arrow}  style={styles.busInfoArr}/>
                                <TextKR>RN호텔 15:35 도착</TextKR>
                            </View>

                            <View>
                                <TextKR>탑승 장소 : RN호텔 주차장 입구 / 부산역 정문 버스 정류장</TextKR>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Directions;
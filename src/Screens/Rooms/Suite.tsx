import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Rooms/styles.js';
import SuiteSwiper from './Components/SuiteSwiper';


const Suite = () => {
    const roomInfo = [
        {
            roomSytle: 'Suite',
            roomSub: '스위트 객실은 럭셔리한 경험과 넉넉한 공간을 제공하는 특별한 휴식처입니다. 독립된 거실과 침실이 마련되어 있어 보다 편안한 프라이버시를 보장하며, 우아하고 세련된 인테리어가 품격 있는 분위기를 연출합니다. ',
            personnelMin: '2',
            personnelMax: '6',
            checkIn: '15:00',
            checkOut: '11:00',
            price:'370,000',
            basicInfo: {
                b_info01: '18.6평, 트윈 침대 1개',
                b_info02: '2인 기준 / 1인 추가 시 50,000원 / 최대 6인',
            },
            service: {
                bedroom: 'TV, 거위털 침구, 에어컨, 220V, 무료 Wi-Fi',
                bathroom: '욕조, 욕실용품, 목욕가운, 비데',
                minibar: '냉장고, 전기 포트, 커피메이커, 무료 생수, 웰컴쿠키, 와인잔',
                etc: '금고, 슬리퍼, 옷걸이, 소방 비상용품',
            },
        },
    ];

    const {roomSytle, roomSub, personnelMin, personnelMax, checkIn, checkOut, price, basicInfo, service} = roomInfo[0];

    return(
        <ScrollView>
            <View style={styles.roomContainer}>
                <SuiteSwiper />

                <TextEN style={styles.roomTit}>{roomSytle}</TextEN>
                <TextKR style={styles.roomSub}>{roomSub}</TextKR>

                <View style={styles.roomInfoLine}>
                    <View>
                        <TextKR style={styles.roomInfoLeft}>{personnelMin}인 기준 / 최대 {personnelMax}인</TextKR>
                        <TextKR style={styles.roomInfoLeft}>체크인 {checkIn} ~ 체크아웃 {checkOut}</TextKR>
                    </View>
                    <View style={styles.roomInfoRight}>
                        <TextKR style={[styles.roomInfoLeft, {marginRight:5}]}>1박</TextKR>
                        <TextEN style={styles.roomPrice}>{price}원</TextEN>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <TextKR style={styles.infoTit}>기본정보</TextKR>
                    {Object.values(basicInfo).map((basicItem, index) => (
                        <TextKR key={index} style={styles.infoCon}>
                            {basicItem}
                        </TextKR>
                    ))}
                </View>

                <View style={[styles.infoBox, {marginBottom: 30}]}>
                    <TextKR style={styles.infoTit}>시설서비스</TextKR>
                    {Object.values(service).map((serviceItem, index) => (
                        <TextKR key={index} style={styles.infoCon}>
                            {serviceItem}
                        </TextKR>
                    ))}
                </View>


                <TouchableOpacity 
                    style={[styles.btnCom, styles.btnMain]} 
                    //onPress={() => navigateTo('Reservation')}
                >
                    <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default Suite;
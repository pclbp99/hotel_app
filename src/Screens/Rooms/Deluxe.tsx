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
import DeluxeSwiper from './Components/DeluxeSwiper';


const Deluxe = () => {
    const roomInfo = [
        {
            roomSytle: 'Deluxe',
            roomSub: '디럭스 객실은 여유로운 공간과 세련된 디자인이 조화를 이루는 고급스러운 환경을 제공합니다. 넓은 킹사이즈 침대와 고급 침구가 편안한 숙면을 보장하며, 품격 있는 인테리어와 따뜻한 분위기의 조명으로 아늑한 분위기를 느낄 수 있습니다.',
            personnelMin: '2',
            personnelMax: '4',
            checkIn: '15:00',
            checkOut: '11:00',
            price:'240,000',
            basicInfo: {
                b_info01: '11.4평, 트윈 침대 1개',
                b_info02: '2인 기준 / 1인 추가 시 50,000원 / 최대 4인',
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
                <DeluxeSwiper />

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


export default Deluxe;
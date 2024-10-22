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
import styles from '../../Screens/Dining/styles.js';
import TotImg from '../../Assets/Images/Dining02.jpg';

const TasteOfTerrace = () => {

    const totInfo = [
        {
            image: TotImg,
            titleEN: 'Oriental Hormony',
            titleKR: '오리엔탈 하모니',
            content: '오리엔탈 하모니는 아시아 요리의 다채로운 맛과 정수를 담아낸 레스토랑입니다. 한국, 일본, 중국의 전통 요리를 현대적인 감각으로 재해석하여 제공하며, 신선한 재료를 사용한 다양한 해산물 요리와 정성스럽게 준비된 한식 반찬을 만나볼 수 있습니다.',
            lunchTime: '평일(월-금) - 11:30 - 14:30\n주말 및 공휴일 - 1부 11:30 - 13:20 / 2부 13:50 - 15:40',
            dinnerTime: '평일(월-목) - 17:30 - 21:30\n금요일, 주말 및 공휴일 - 1부 17:20 - 19:20 / 2부 19:50 - 21:50',
            parkInfo: '다이닝 이용 시 호텔 내 점심 3시간/저녁 4시간 무료 주차 가능합니다.*주말 및 공휴일 이용 시 호텔 이용객이 많아 주차장이 매우 혼잡하여 대중 교통 이용을 권장 드립니다. \n(주차 소요 시간: 평균 30분 이상)',
            location: 'RN호텔 1층 로비',
            tel: '051-123-4569',
            seat: '총 200석 별실 5개(최대 16명 수용 가능)\n*별실 이용 시 룸 차지 60,000원 부과',
        },
    ];

    const {image, titleEN, titleKR, content, lunchTime, dinnerTime, parkInfo, location, tel, seat} = totInfo[0];

    return (
        <ScrollView>
            <View style={styles.roomContainer}>
                <View>
                    <Image source={image} style={styles.dnImage}/>

                    <TextEN style={styles.dnTitEN}>{titleEN}</TextEN>
                    <TextKR style={styles.dnTitKR}>{titleKR}</TextKR>
                    <TextKR style={styles.dnSub}>{content}</TextKR>

                    <View style={styles.dnInfo}>
                        <TextKR style={styles.dnTit}>운영시간</TextKR>
                        <TextKR>[점심]</TextKR>
                        <TextKR style={{marginBottom: 20}}>{lunchTime}</TextKR>
                        <TextKR>[저녁]</TextKR>
                        <TextKR style={{marginBottom: 20}}>{dinnerTime}</TextKR>

                        <TextKR style={styles.dnTit}>주차정보</TextKR>
                        <TextKR>{parkInfo}</TextKR>
                    </View>

                    <View style={styles.dnInfo}>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>위치</TextKR>
                            <TextKR>{location}</TextKR>
                        </View>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>문의</TextKR>
                            <TextKR>{tel}</TextKR>
                        </View>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>좌석수</TextKR>
                            <TextKR>{seat}</TextKR>
                        </View>
                    </View>
                </View>

                <TouchableOpacity 
                    style={[styles.btnCom, styles.btnMain]} 
                >
                    <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default TasteOfTerrace;
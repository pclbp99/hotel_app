import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import TextKR from '../../../TextKR.js';
import TextEN from '../../../TextEN.js';
import styles from './styles.js';
import TotImg from '../../Assets/Images/Dining01.jpg';

const TasteOfTerrace = () => {

    const totInfo = [
        {
            image: TotImg,
            titleEN: 'Taste Of Terrace',
            titleKR: '테이스트 오브 테라스',
            content: '테이스트 오브 테라스는 신선한 재료로 준비된 정통 유럽 요리를 제공하는 고급 다이닝 레스토랑입니다. 이곳에서는 프랑스와 이탈리아의 클래식한 요리부터 모던한 터치를 가미한 창의적인 요리까지, 다양하고 세련된 메뉴를 만날 수 있습니다.',
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
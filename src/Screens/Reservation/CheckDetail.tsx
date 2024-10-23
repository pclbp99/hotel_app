import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Reservation/styles.js';

import SubHeader from '../../Components/SubHeader';

const CheckDetail = () => {

    const navigation = useNavigation(); 

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="예약확인" />
                </View>
                <View style={styles.commonPadding}>
                    <View>
                        <TextKR>객실 및 입실 정보</TextKR>
                        <View>
                            <TextKR>디럭스</TextKR>
                            <View>
                                <TextKR>체크인</TextKR>
                                <TextKR>2024.10.07 15:00</TextKR>
                            </View>
                            <View>
                                <TextKR>체크아웃</TextKR>
                                <TextKR>2024.10.08 11:00</TextKR>
                            </View>
                        </View>
                    </View>

                    <View>
                        <TextKR>예약자 정보</TextKR>
                        <View>
                            <View>
                                <TextKR>예약번호</TextKR>
                                <TextKR>2024100720241008001</TextKR>
                            </View>
                            <View>
                                <TextKR>예약자명</TextKR>
                                <TextKR>홍길동</TextKR>
                            </View>
                            <View>
                                <TextKR>연락처</TextKR>
                                <TextKR>010-1234-5678</TextKR>
                            </View>
                            <View>
                                <TextKR>방문수단</TextKR>
                                <TextKR>차량 (12가 3456)</TextKR>
                            </View>
                            <View>
                                <TextKR>결제수단</TextKR>
                                <TextKR>신용/체크카드</TextKR>
                            </View>
                        </View>
                    </View>

                    <View>
                        <TextKR>결제 금액</TextKR>
                        <View>
                            <View>
                                <TextKR>객실 금액</TextKR>
                                <TextKR>240,000원</TextKR>
                            </View>
                            <View>
                                <TextKR>세금 및 봉사료</TextKR>
                                <TextKR>53,000원</TextKR>
                            </View>
                            <View>
                                <TextKR>할인 금액</TextKR>
                                <TextKR>0원</TextKR>
                            </View>
                        </View>
                        <View>
                            <TextKR>총 결제 금액</TextKR>
                            <TextEN>293,000원</TextEN>
                        </View> 
                    </View>

                    <TouchableOpacity 
                            style={[styles.btnCom100per, styles.btnMain]} 
                            onPress={() => navigation.navigate('Main')}
                    >
                        <TextKR style={{color:'#ffffff'}}>홈으로</TextKR>
                    </TouchableOpacity>

                </View>               
            </ScrollView>
        </SafeAreaView>
    )
}

export default CheckDetail;
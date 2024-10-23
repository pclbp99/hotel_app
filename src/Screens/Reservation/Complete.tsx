import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    TextInput,
    FlatList
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import styles from '../../Screens/Reservation/styles.js';

import SubHeader from '../../Components/SubHeader';
import CompleteImg from '../../Assets/Images/pay_complete.png';


const Complete = () => {

    const navigation = useNavigation(); 

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="예약완료" />
                </View>
                <View style={styles.commonPadding}>
                    <Image source={CompleteImg} />
                    <View>
                        <TextKR>예약이 완료되었습니다</TextKR>
                        <View>
                            <TextKR>예약번호</TextKR>
                            <TextKR>2024100720241008001</TextKR>
                            <TextKR>예약자명</TextKR>
                            <TextKR>홍길동</TextKR>
                            <TextKR>체크인</TextKR>
                            <TextKR>2024.10.07 15:00 이후</TextKR>
                        </View>
                    </View>

                    <TouchableOpacity 
                            style={[styles.btnCom100per, styles.btnMain]} 
                            onPress={() => navigation.navigate('Main')}
                    >
                        <TextKR style={{color:'#ffffff'}}>홈으로</TextKR>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={[styles.btnCom100per, styles.btnLine]} 
                            onPress={() => navigation.navigate('CheckDetail')}
                    >
                        <TextKR style={{color:'#333'}}>예약 상세정보 확인</TextKR>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Complete;
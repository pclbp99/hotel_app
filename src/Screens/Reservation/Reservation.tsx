import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Reservation/styles.js';

import SubHeader from '../../Components/SubHeader';
import Calendar from '../Reservation/Components/Calendar';

import downArrow from '../../Assets/Icons/down_arrow.png';
import Minus from '../../Assets/Icons/minus.png';
import Plus from '../../Assets/Icons/plus.png';
import Standard from '../../Assets/Images/Standard.jpg'
import Deluxe from '../../Assets/Images/Deluxe.jpg'
import Suite from '../../Assets/Images/Suite.jpg'

const Reservation = () => {

    const navigation = useNavigation(); 

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(0);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [modal, setModal] = useState(false);

    // 오늘과 내일 날짜 계산 함수
    const getInitialDates = () => {
        const today = new Date();
        const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const formattedTomorrow = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;

        return { formattedToday, formattedTomorrow };
    };

    // 초기 접속 시, 체크인/아웃 날짜 오늘, 내일로 자동 세팅
    useEffect(() => {
        const today = new Date();
        const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const formattedTomorrow = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
        
        setStart(formattedToday);
        setEnd(formattedTomorrow);
    }, []);

    // 초기 접속 시, 인원 수 초기화
    useEffect(() => {
        setAdult(2);
        setChild(0);
    }, []);

    // 인원 카운팅 
    const adultInc = () => {
        if(adult < 4){
            setAdult(adult + 1);
        }
    };

    const adultDec = () => {
        if(adult > 2) {
            setAdult(adult - 1);
        }else{
            Alert.alert('최소 인원 확인', '성인 2명부터 예약 가능합니다');
        }
    };

    const childInc = () => {
        if(child < 2){
            setChild(child + 1);
        }else{
            Alert.alert('최대 인원 제한', '어린이는 2명까지 추가 가능합니다')
        }
    };

    const childDec = () => {
        if(child > 0) {
            setChild(child - 1);
        }
    };
    
    // Calendar 모달
    const modalOpen = () => {
        if (modal) {
            // 모달이 열려 있는 경우 닫기
            const { formattedToday, formattedTomorrow } = getInitialDates();
            setStart(formattedToday);
            setEnd(formattedTomorrow);
            setModal(false);
        } else {
            // 모달이 닫혀 있는 경우 열기
            setStart('');
            setEnd('');
            setModal(true);
        }
    }

    const roomInfo = [
        {
            image: Standard,
            roomStyle: '스탠다드',
            minPersonnel: '2',
            maxPersonnel: '4',
            checkIn: '15:00',
            checkOut: '11:00',
            price: '180,000'
        },
        {
            image: Deluxe,
            roomStyle: '디럭스',
            minPersonnel: '2',
            maxPersonnel: '4',
            checkIn: '15:00',
            checkOut: '11:00',
            price: '240,000'
        },
        {
            image: Suite,
            roomStyle: '스위트',
            minPersonnel: '2',
            maxPersonnel: '6',
            checkIn: '15:00',
            checkOut: '11:00',
            price: '370,000'
        },
    ]

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="예약하기" />
                </View>
                <View style={styles.commonPadding}>
                    <TextKR style={styles.roomsTit}>객실선택</TextKR>
                    <View>
                        {/* 체크인/아웃 */}
                        <TextKR style={{color:'#555'}}>체크인/아웃</TextKR>
                        <TouchableOpacity 
                            style={styles.chechInOUt} 
                            onPress={() => modalOpen()}
                        >
                            <View style={styles.checkInOutBox}>
                                <TextKR>{start}</TextKR>
                                <TextKR>―</TextKR>
                                <TextKR>{end}</TextKR>
                            </View>
                            <Image source={downArrow} style={{marginLeft:10}}/>
                        </TouchableOpacity>

                        {modal && (
                            <Calendar setStart={setStart} start={start} setEnd={setEnd} end={end} setModal={setModal}/>
                        )}

                        <View style={styles.humanCount}>
                            {/* 성인 인원 카운트 */}
                            <View style={{width:'48%'}}>
                                <TextKR style={{color:'#555'}}>성인</TextKR>
                                <View style={styles.humanCountBox}>
                                    <TouchableOpacity onPress={adultDec}>
                                        <Image source={Minus} />
                                    </TouchableOpacity>
                                    <TextEN style={{color:'#000'}}>{adult}</TextEN>
                                    <TouchableOpacity onPress={adultInc}>
                                        <Image source={Plus} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* 어린이 인원 카운트 */}
                            <View style={{width:'48%'}}>
                                <TextKR style={{color:'#555'}}>어린이</TextKR>
                                <View style={styles.humanCountBox}>
                                    <TouchableOpacity onPress={childDec}>
                                        <Image source={Minus} />
                                    </TouchableOpacity>
                                    <TextEN style={{color:'#000'}}>{child}</TextEN>
                                    <TouchableOpacity onPress={childInc}>
                                        <Image source={Plus} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.commonButton}>
                            <TextKR style={styles.ComBtnText}>객실 선택하기</TextKR>
                        </TouchableOpacity>
                    </View>
                    
                    {/* 객실 리스트 */}
                    <View style={styles.roomsView}>
                        {roomInfo.map((room, index) => (
                            <View key={index}>
                                <Image source={room.image} style={styles.roomImg} />
                                <View style={styles.roomLine}>
                                    <View>
                                    <TextKR style={styles.roomStyle}>{room.roomStyle}</TextKR>
                                    <TextKR style={styles.roomInfo}>
                                        {room.minPersonnel}인 기준 / 최대 {room.maxPersonnel}인
                                    </TextKR>
                                    <TextKR style={styles.roomInfo}>
                                        체크인 {room.checkIn} ~ 체크아웃 {room.checkOut}
                                    </TextKR>
                                    <TextEN style={styles.roomPrice}>{room.price}원</TextEN>
                                    </View>
                                    <View>
                                    <TouchableOpacity style={[styles.btnCom100, styles.btnLine]}>
                                        <TextKR style={[styles.btnTxt, { color: '#837166' }]}>
                                        상세보기
                                        </TextKR>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnCom100, styles.btnSub]}>
                                        <TextKR style={[styles.btnTxt, { color: '#ffffff' }]}>
                                        예약하기
                                        </TextKR>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Reservation;
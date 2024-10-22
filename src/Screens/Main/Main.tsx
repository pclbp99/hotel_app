import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../Main/styles.js';
import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';

import Header from '../../Components/Header';
import SwiperSlide from '../Main/Components/Swiper';
import Calendar from '../Main/Components/Calendar';
import Rooms from '../Main/Components/Rooms';
import Promotion from '../Main/Components/PromotionSlide';
import Facilities from '../Main/Components/Facilities';

import downArrow from '../../Assets/Icons/down_arrow.png';
import Minus from '../../Assets/Icons/minus.png';
import Plus from '../../Assets/Icons/plus.png';
import Dining01 from '../../Assets/Images/Dining01.jpg';
import Dining02 from '../../Assets/Images/Dining02.jpg';

import axios from 'axios';

const Main = () => {

    const navigation = useNavigation(); 

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(0);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [modal, setModal] = useState(false);

    

    // API get 방식으로 시설 리스트 불러오기
    const [item, setItem] = useState([]);

    const Test = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/Facl.ajax.php`;

        try{
            const response = await axios.get(endpoint)
            .then(function(response){
                //console.log(response.data);
                setItem(response.data.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }catch(error){
            console.error('Error', error);
        }
    };

    useEffect(()=>{
        Test();
        //console.log('item',item);
    }, []);


   

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

    return (
        <SafeAreaView>
            <ScrollView>

                {/* Header */}
                <Header />

                {/* Main Slide */}
                <SwiperSlide />

                {/* Check In/Out */}
                <View style={styles.commonView}>
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

                {/* Rooms */}
                <View style={styles.commonView2}>
                    <View style={styles.roomTitles}>
                        <TextEN style={[styles.titEN, {marginRight:10}]}>ROOMS</TextEN>
                        <TextKR style={styles.titKR}>객실</TextKR>
                    </View>
                    <Rooms />
                </View>

                {/* 프로모션 & 패키지*/}
                <View style={styles.promotionView}>
                    <View style={styles.promotionTitles}>
                        <TextEN style={[styles.titEN, {textAlign:'center'}]}>PROMOTION & PACKAGE</TextEN>
                        <TextKR style={[styles.titKR, {textAlign:'center'}]}>프로모션 & 패키지</TextKR>
                    </View>
                    <Promotion />
                </View>

                {/* 다이닝 */}
                <View style={styles.commonView2}>
                    <View style={styles.diningTitles}>
                        <TextEN style={[styles.titEN, {marginRight:10}]}>DINING</TextEN>
                        <TextKR style={styles.titKR}>RN 호텔에서만 느낄 수 있는 특별한 미식</TextKR>
                    </View>

                    <View style={styles.diningEach}>
                        <View style={styles.diningImageBox}>
                            <Image source={Dining01} style={{width: '95%', height: 260}}/>
                        </View>
                        <View style={styles.diningTextBox}>
                            <TextEN style={styles.diningTextTitEN}>Taste of Terrace</TextEN>
                            <TextKR style={styles.diningTextTitKR}>테이스트 오브 테라스</TextKR>
                            <TextKR style={styles.diningTextDsc}>테이스트 오브 테라스는 신선한 재료로 준비된 정통 유럽 요리를 제공하는 고급 다이닝 레스토랑입니다. 이곳에서는 프랑스와 이탈리아의 클래식한 요리부터 모던한 터치를 가미한 창의적인 요리까지, 다양하고 세련된 메뉴를 만날 수 있습니다.</TextKR>
                        </View>
                    </View>

                    <View style={styles.diningEach}>
                        <View style={[styles.diningImageBox, {flexDirection:'row-reverse'}]}>
                            <Image source={Dining02} style={{width: '95%', height: 260}}/>
                        </View>
                        <View style={styles.diningTextBox}>
                            <TextEN style={[styles.diningTextTitEN, {textAlign:'right'}]}>Oriental Harmony</TextEN>
                            <TextKR style={[styles.diningTextTitKR, {textAlign:'right'}]}>오리엔탈 하모니</TextKR>
                            <TextKR style={[styles.diningTextDsc, {textAlign:'right'}]}>오리엔탈 하모니는 아시아 요리의 다채로운 맛과 정수를 담아낸 레스토랑입니다. 한국, 일본, 중국의 전통 요리를 현대적인 감각으로 재해석하여 제공하며, 신선한 재료를 사용한 다양한 해산물 요리와 정성스럽게 준비된 한식 반찬을 만나볼 수 있습니다.</TextKR>
                        </View>
                    </View>
                    
                    <View style={{paddingHorizontal:20}}>
                        <TouchableOpacity 
                            style={styles.commonButton}
                            onPress={() => navigateTo('Dining')}
                        >
                            <TextKR style={styles.ComBtnText}>다이닝 전체보기</TextKR>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 시설 */}
                <View style={styles.commonView2}>
                    <View style={styles.facilitiesTitles}>
                        <TextEN style={[styles.titEN, {marginRight:10}]}>FACILITIES</TextEN>
                        <TextKR style={styles.titKR}>시설</TextKR>
                    </View>
                    <Facilities item={item}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Main;

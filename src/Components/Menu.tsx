import React, { useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/authSlice';

import TextKR from '../../TextKR';
import LoginArrow from '../Assets/Icons/login_arrow.png';
import Close from '../Assets/Icons/close.png';

const { height: screenHeight } = Dimensions.get('window');

const Menu = ({ menuOn, menuClose }) => {

  const navigation = useNavigation(); 

  const navigateTo = (screen) => {
      navigation.navigate(screen);
      menuClose();
  };

  const navigateToRoomTab = (screen, roomId) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Rooms', params: { screen: screen, roomId: roomId } }],
    });
    menuClose();
  };
  
  const navigateToDiningTab = (screen, diningId) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dining', params: { screen: screen, diningId: diningId } }],
    });
    menuClose();
  };
  

  /*const navigateToRoomTab = (tab) => {
    navigation.push('Rooms', {screen: tab,});
  };
  
  const navigateToDiningTab = (tab) => {
    navigation.push('Dining', {screen: tab,});
  };*/

  //로그인 상태 관리
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(login());
    navigateTo('Login')
  };

  const handleLogout = () => {
    dispatch(logout());
    navigateTo('Main')
  };

  // 객실명 불러오기
  const [room, setRoom] = useState([]);

  const getRoomsList = async() => {
      const url = 'https://routidoo001.cafe24.com/api';
      const endpoint = `${url}/Parlor.ajax.php`;
      
      try{
          const response = await axios.get(endpoint)
          .then(function(response){
              //console.log(response.data);
              setRoom(response.data.data);
          })
          .catch(function(error){
              console.log(error);
          });
      }catch(error){
          console.error('Error', error);
      }
  };

  useEffect(() => {
      getRoomsList();
  }, []);

  // 다이닝 불러오기
  const [dining, setDining] = useState([]);

  const getDiningList = async() => {
      const url = 'https://routidoo001.cafe24.com/api';
      const endpoint = `${url}/Dining.ajax.php`;
      
      try{
          const response = await axios.get(endpoint)
          .then(function(response){
              //console.log('dining',response.data.data);
              setDining(response.data.data);
          })
          .catch(function(error){
              console.log(error);
          });
      }catch(error){
          console.error('Error', error);
      }
  };

  useEffect(() => {
      getDiningList();
  }, []);

  return (
    <Modal
      transparent={true}
      visible={menuOn}
      animationType="fade"
      onRequestClose={menuClose} 
    >

        <View style={styles.menuContainer}>
          <View style={styles.menuTop}>
            <TouchableOpacity 
              style={styles.loginBtn} 
              onPress={isLoggedIn ? handleLogout : handleLogin}
            >
              <TextKR style={styles.loginTxt}>
                {isLoggedIn ? '로그아웃' : '로그인'}
              </TextKR>
              <Image source={LoginArrow} />
            </TouchableOpacity>
            <TouchableOpacity onPress={menuClose}>
              <Image source={Close} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={styles.menuBox}>
                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>ABOUT</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity onPress={() => navigateTo('About')}>
                      <TextKR style={styles.cate02Tit}>호텔 소개</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo('FacilityIntroduction')}>
                      <TextKR style={styles.cate02Tit}>시설 안내</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo('Directions')}>
                      <TextKR style={styles.cate02Tit}>오시는 길</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>SPECIAL</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity onPress={() => navigateTo('Promotion')}>
                        <TextKR style={styles.cate02Tit}>프로모션 & 패키지</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>RESERVATION</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity onPress={() => navigateTo('Reservation')}>
                        <TextKR style={styles.cate02Tit}>예약하기</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateTo('Check')}>
                        <TextKR style={styles.cate02Tit}>예약확인</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>ROOMS</TextKR>
                </View>
                <View style={styles.cate02}>
                  {room.map((item, index) => (
                    <TouchableOpacity 
                      onPress={() => navigateToRoomTab(item.pr_subject, item.idx)}
                      key={index}
                    >
                      <TextKR style={styles.cate02Tit}>{item.pr_subject}</TextKR>
                    </TouchableOpacity>
                  ))}
                    {/* <TouchableOpacity onPress={() => navigateToRoomTab('스탠다드')}>
                        <TextKR style={styles.cate02Tit}>스탠다드</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToRoomTab('디럭스')}>
                        <TextKR style={styles.cate02Tit}>디럭스</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToRoomTab('스위트')}>
                        <TextKR style={styles.cate02Tit}>스위트</TextKR>
                    </TouchableOpacity>*/}
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>DINING</TextKR>
                </View>
                <View style={styles.cate02}>
                  {dining.map((item, index) => (
                      <TouchableOpacity 
                        onPress={() => navigateToDiningTab(item.dn_name, item.idx)}
                        key={index}
                      >
                        <TextKR style={styles.cate02Tit}>{item.dn_name}</TextKR>
                      </TouchableOpacity>
                  ))}
                    {/*<TouchableOpacity onPress={() => navigateToDiningTab('테이스트 오브 테라스')}>
                        <TextKR style={styles.cate02Tit}>테이스트 오브 테라스</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToDiningTab('오리엔탈 하모니')}>
                        <TextKR style={[styles.cate02Tit, {paddingBottom:40}]}>오리엔탈 하모니</TextKR>
                    </TouchableOpacity>*/}
                </View>
            </View>
          </ScrollView>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    
  menuContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: screenHeight,
  },

  menuTop: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginTxt: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },

  menuBox: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  cate01: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },

  cate01Tit: {
    fontSize: 18,
    fontFamily: 'Roboto-SemiBold',
    fontWeight: 700,
  },

  cate02: {
    padding: 10,
  },

  cate02Tit: {
    paddingVertical: 7.5,
    fontSize: 16,
  },

});

export default Menu;

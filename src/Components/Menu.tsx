import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import TextKR from '../../TextKR';
import LoginArrow from '../Assets/Icons/login_arrow.png';
import Close from '../Assets/Icons/close.png';

const { height: screenHeight } = Dimensions.get('window');

const Menu = ({ menuOn, menuClose }) => {
  return (
    <Modal
      transparent={true}
      visible={menuOn}
      animationType="fade"
      onRequestClose={menuClose} 
    >

        <View style={styles.menuContainer}>
          <View style={styles.menuTop}>
            <TouchableOpacity style={styles.loginBtn}>
              <TextKR style={styles.loginTxt}>로그인</TextKR>
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
                    <TouchableOpacity>
                    <TextKR style={styles.cate02Tit}>호텔 소개</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <TextKR style={styles.cate02Tit}>시설 안내</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <TextKR style={styles.cate02Tit}>오시는 길</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>SPECIAL</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>프로모션 & 패키지</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>RESERVATION</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>예약하기</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>예약확인</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>ROOMS</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>스탠다드</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>디럭스</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>스위트</TextKR>
                    </TouchableOpacity>
                </View>

                <View style={styles.cate01}>
                    <TextKR style={styles.cate01Tit}>DINING</TextKR>
                </View>
                <View style={styles.cate02}>
                    <TouchableOpacity>
                        <TextKR style={styles.cate02Tit}>테이스트 오브 테라스</TextKR>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextKR style={[styles.cate02Tit, {paddingBottom:40}]}>오리엔탈 하모니</TextKR>
                    </TouchableOpacity>
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

import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import styles from '../../Screens/Reservation/styles.js';

import SubHeader from '../../Components/SubHeader';



const Check = () => {

    const navigation = useNavigation(); 
    const [activeTab, setActiveTab] = useState('Tab1');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rsvNum, setRsvNum] = useState('');
    const [rsvName, setRsvName] = useState('');
    const [rsvPhone, setRsvPhone] = useState('');

    const memberChk = () => {
        navigation.navigate('CheckDetail'); 
    }

    const nonmemberChk = () => {
        if(!rsvNum || !rsvName || !rsvPhone) {
            Alert.alert('입력 확인', '모든 내용을 입력해주세요');
            return;
        }

        navigation.navigate('CheckDetail');
    }

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="예약확인" />
                </View>
                <View style={styles.commonPadding}>
                    <View>
                        {/* 탭 메뉴 */}
                        <View style={styles.tabContainer}>
                            <TouchableOpacity
                            style={[
                                styles.tabButton,
                                activeTab === 'Tab1' && styles.activeTabButton,
                            ]}
                            onPress={() => setActiveTab('Tab1')}
                            >
                            <TextKR
                                style={[
                                styles.tabButtonText,
                                activeTab === 'Tab1' && styles.activeTabText,
                                ]}
                            >
                                회원 예약조회
                            </TextKR>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={[
                                styles.tabButton,
                                activeTab === 'Tab2' && styles.activeTabButton,
                            ]}
                            onPress={() => setActiveTab('Tab2')}
                            >
                            <TextKR
                                style={[
                                styles.tabButtonText,
                                activeTab === 'Tab2' && styles.activeTabText,
                                ]}
                            >
                                비회원 예약조회
                            </TextKR>
                            </TouchableOpacity>
                        </View>

                        {/* 탭 내용 */}
                        <View >
                            {activeTab === 'Tab1' ? (
                                <View>
                                    <View style={styles.inputView}>
                                        <TextInput
                                            value={email}
                                            onChangeText={(text) => setEmail(text)}
                                            placeholder='이메일 아이디를 입력해주세요'
                                        />
                                    </View>
                                    <View style={styles.inputView}>
                                        <TextInput 
                                            value={password}
                                            onChangeText={setPassword}
                                            placeholder='비밀번호를 입력해주세요' 
                                            secureTextEntry
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity 
                                            style={[styles.btnCom100per, styles.btnMain]} 
                                            onPress={memberChk}
                                        >
                                            <TextKR style={{color:'#ffffff'}}>조회하기</TextKR>
                                        </TouchableOpacity>

                                        <TouchableOpacity 
                                            style={[styles.btnCom100per, styles.btnLineB]}
                                        >
                                            <TextKR style={{color:'#333'}}>계정찾기</TextKR>
                                        </TouchableOpacity>
                                        </View>
                                </View>
                            ) : (
                                <View>
                                    <View style={styles.inputView}>
                                        <TextInput
                                            value={rsvNum}
                                            onChangeText={(text) => setRsvNum(text)}
                                            placeholder='예약번호를 입력해주세요'
                                        />
                                    </View>
                                    <View style={styles.inputView}>
                                        <TextInput
                                                value={rsvName}
                                                onChangeText={(text) => setRsvName(text)}
                                                placeholder='예약자 이름을 입력해주세요'
                                            />
                                    </View>
                                    <View style={styles.inputView}>
                                        <TextInput
                                                value={rsvPhone}
                                                onChangeText={(text) => setRsvPhone(text)}
                                                placeholder='예약자 연락처를 입력해주세요'
                                            />
                                    </View>
                                    <View>
                                        <TouchableOpacity 
                                            style={[styles.btnCom100per, styles.btnMain]} 
                                            onPress={nonmemberChk}
                                        >
                                            <TextKR style={{color:'#ffffff'}}>비회원 조회하기</TextKR>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>               
            </ScrollView>
        </SafeAreaView>
    )
}


export default Check;
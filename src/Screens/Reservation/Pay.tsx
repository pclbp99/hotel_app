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
import TextEN from '../../../TextEN';
import styles from '../../Screens/Reservation/styles.js';

import SubHeader from '../../Components/SubHeader';
import RadioButton from '../Reservation/Components/RadioButton';
import CheckBox from '../Reservation/Components/CheckBox';

const Pay = () => {

    const navigation = useNavigation(); 

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [carchk, setCarchk] = useState(false);
    const [carnum, setCarnum] = useState('');
    const [payOption, setPayOption] = useState('')
    const [isAllChecked, setIsAllChecked] = useState(false);

    const handleSelect = (option) => {
        //console.log('선택된 옵션:', option);
    };

    // 약관 동의
    const [individualChecks, setIndividualChecks] = useState([
        { id: 1, label: '[필수] 이용규칙', checked: false },
        { id: 2, label: '[필수] 취소 및 환불 규칙', checked: false },
        { id: 3, label: '개인정보 제 3자 제공 안내', checked: false },
    ]);

    useEffect(() => {
        setIndividualChecks((prevChecks) =>
          prevChecks.map((check) => ({ ...check, checked: isAllChecked }))
        );
    }, [isAllChecked]);
    
    const handleIndividualCheck = (id) => {
        setIndividualChecks((prevChecks) =>
          prevChecks.map((check) =>
            check.id === id ? { ...check, checked: !check.checked } : check
          )
        );
    };
    
    useEffect(() => {
        const allChecked = individualChecks.every((check) => check.checked);
        setIsAllChecked(allChecked);
    }, [individualChecks]);

    const payCheck = () => {
        if(!name || !phone) {
            Alert.alert('내용 입력 확인', '필요한 내용을 모두 입력해주세요');
            return;
        }

        const essentialChecked = individualChecks
        .filter(item => item.id === 1 || item.id === 2)
        .every(item => item.checked);
    
        if (!essentialChecked) {
            Alert.alert(
            '필수 항목 미체크', '필수 항목에 동의해 주세요.'
            );
            return;
        }

        Alert.alert('예약 성공', '예약이 성공적으로 완료되었습니다.');
        navigation.navigate('Complete');
    }

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="예약하기" />
                </View>
                <View style={styles.commonPadding}>
                    {/* 입실 정보 */}
                    <View>
                        <TextKR>디럭스</TextKR>
                        <TextEN>2024.10.17 15:00 ~ 2024.10.08 11:00</TextEN>
                        <TextKR>2인 기준 / 최대 4인</TextKR>
                        <View>
                            <TextKR>1박</TextKR>
                            <TextEN>240,000원</TextEN>
                        </View>
                    </View>

                    {/* 예약자 정보 */}
                    <View style={styles.resvPerson}>
                        <TextKR>예약자 정보</TextKR>
                        <View style={styles.resvEach}>
                            <TextKR style={styles.resvName}>성명</TextKR>
                            <View style={styles.inputView}>
                                <TextInput
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                    placeholder='예약자 성명을 입력해주세요'
                                />
                            </View>
                        </View>
                        <View style={styles.resvEach}>
                            <TextKR style={styles.resvName}>휴대폰 번호</TextKR>
                            <View style={styles.inputView}>
                                <TextInput
                                    value={phone}
                                    onChangeText={(text) => setPhone(text)}
                                    placeholder='예약자 연락처를 입력해주세요'
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style={styles.resvEach}>
                            <TextKR style={styles.resvName}>방문 수단</TextKR>
                            <View style={styles.carView}>
                                    <TouchableOpacity
                                    style={[
                                        styles.btnCom,
                                        !carchk ? styles.btnSub : styles.btnDisabled,
                                        { width: '48%', height: 45 }
                                    ]}
                                    onPress={() => setCarchk(false)}
                                    >
                                        <TextKR style={[styles.btnTxtMini, { color: !carchk ? '#ffffff' : '#777' }]}>
                                            도보
                                        </TextKR>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                    style={[
                                        styles.btnCom,
                                        carchk ? styles.btnSub : styles.btnDisabled,
                                        { width: '48%', height: 45 }
                                    ]}
                                    onPress={() => setCarchk(true)}
                                    >
                                        <TextKR style={[styles.btnTxtMini, { color: carchk ? '#ffffff' : '#777' }]}>
                                            차량
                                        </TextKR>
                                    </TouchableOpacity>
                            </View>
                            { carchk ?  
                                <View style={styles.inputView}>
                                    <TextInput
                                        value={carnum}
                                        onChangeText={(text) => setCarnum(text)}
                                        placeholder='차량번호를 입력하세요'
                                    />
                                </View> : ''}
                        </View>
                    </View>

                    {/* 결제 금액 */}
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

                    {/* 결제 수단 */}
                    <View>
                        <TextKR>결제 수단</TextKR>
                        <View>
                            <RadioButton
                                options={['신용/체크카드', '온라인 간편결제', '무통장 입금', '휴대폰 결제']}
                                onSelect={handleSelect}
                            />
                        </View>
                        <View>
                            <TextKR>현장결제</TextKR>
                            <TextKR>추가인원 등 현장 결제 발생 상품을 확인해주세요</TextKR>
                            <TextKR>취소불가 및 수수료</TextKR>
                            <TextKR>취소 및 환불 규정에 따라 취소 불가 또는 취소 수수료가 발생할 수 있으니
                            관련 규정을 확인해 주세요</TextKR>
                            <TextKR>미성년자 법정 대리인</TextKR>
                            <TextKR>미성년자는 법정대리인 동행 없이 투숙이 불가능합니다</TextKR>
                        </View>
                    </View>

                    {/* 약관 동의 */}
                    <View>
                        {/* 전체 동의 체크박스 */}
                        <CheckBox
                            label="전체 동의"
                            isChecked={isAllChecked}
                            onPress={() => setIsAllChecked(!isAllChecked)}
                            isAllCheckBox={true}
                        />

                        {/* 개별 동의 체크박스 */}
                        <FlatList
                            data={individualChecks}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                            <CheckBox
                                label={item.label}
                                isChecked={item.checked}
                                onPress={() => handleIndividualCheck(item.id)}
                            />
                            )}
                        />
                    </View>

                    <TouchableOpacity 
                            style={[styles.btnCom100per, styles.btnMain]} 
                            onPress={payCheck}
                    >
                        <TextKR style={{color:'#ffffff'}}>결제하기</TextKR>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Pay;
import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Dimensions,
  } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import TextKR from '../../../TextKR';
import styles from '../../Screens/Member/styles.js';

import SubHeader from '../../Components/SubHeader';
import SelectBox from '../Member/Components/SelectBox';
import CustomCheckBox from '../Member/Components/CheckBox';

const { width: screenWidth } = Dimensions.get('window');

const Join = () => {

    const navigation = useNavigation();
    const currentYear = new Date().getFullYear();

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [emailDupChk, setEmailDupChk] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [name, setName] = useState('');
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedGender, setSelectedGender] = useState('M');
    const [phone, setPhone] = useState('');
    const [certificationNum, setCertificationNum] = useState('');
    const [termsCheck, setTermsCheck] = useState(false);


    // 연,월,일 값 불러오기
    const years = Array.from({ length: 100 }, (_, i) => ({
        label: `${currentYear - i}`,
        value: currentYear + i,
    }));

    const months = Array.from({ length: 12 }, (_, i) => ({
        label: `${i + 1}`,
        value: i + 1,
    }));

    const days = Array.from({ length: 31 }, (_, i) => ({
        label: `${i + 1}`,
        value: i + 1,
    }));

    // 성별 선택
    const handleSelectGender = (gender) => {
        setSelectedGender(gender); 
    };

    // 약관 동의
    const handleCheckChange = (checked) => {
        setTermsCheck(checked); 
    };  
    
    // 약관 내용
    const terms = '제1조(개인정보의 처리목적) <사업자/단체명>은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. \n 1.홈페이지 회원 가입 및 관리회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의여부 확인, 각종 고지․통지, 고충처리 등을 목적으로 개인정보를 처리합니다.' ;


    //이메일 아이디 형식 확인
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mailCheck = (text) => {
        setEmail(text);
        if (emailRegex.test(text)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        };
    };

    const duplicateCheck =  async() => {
        if(!isEmailValid){
            Alert.alert('형식 확인', '이메일 형식이 아닙니다.');
            return;
        }else{
            // API post 방식으로 사용하기
                const url = 'https://routidoo001.cafe24.com/api';
                const endpoint = `${url}/IdCheck.ajax.php`;
                const data = {
                    user_id : email,
                };

                try{
                    const response = await axios.post(endpoint, data)
                        .then(function(response){
                            console.log(response.data);
                            if(response.data.msg === 'Y'){
                                Alert.alert('중복확인', '현재 아이디는 사용가능합니다');
                                setEmailDupChk(true);
                            }else{
                                Alert.alert('중복확인', '이미 존재하는 아이디입니다');
                                setEmail('');
                                setEmailDupChk(false);
                            }
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                } catch(error) {
                    console.error('Error', error);
                }

           
            {/* 중복 확인 */}
            // if(email === 'test@rn.com'){
            //     Alert.alert('중복확인', '이미 존재하는 아이디입니다');
            //     setEmail('');
            //     return;
            // }else{
            //     Alert.alert('중복확인', '현재 아이디는 사용가능합니다');
            //     setEmailDupChk(true);
            // };
        };
    };


    //비밀번호 정규식 확인
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    //비밀번호 재입력 확인
    const isPasswordMatched = password === passwordChk && password.length > 0;


    // 인증번호 발송
    const smsSend = async () => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/SmsSend.ajax.php`;
        const data = {
            user_hp : phone,
        };

        try{
            const response = await axios.post(endpoint, data)
                .then(function(response){
                    console.log(response.data);
                    if(response.data.msg == 'Y'){
                        Alert.alert('인증번호', '인증번호가 발송되었습니다.\n코드번호:'+response.data.code);
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        } catch(error) {
            console.error('Error', error);
        }
    };

    // 인증번호 확인
    const hpCheck = async () => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/HpCheck.ajax.php`;
        const data = {
            user_hp : phone,
            code : certificationNum,
        };

        try{
            const response = await axios.post(endpoint, data)
                .then(function(response){
                    console.log(response.data);
                    if(response.data.msg === 'Y'){
                        Alert.alert('인증확인', '인증이 완료되었습니다');
                    }else{
                        Alert.alert('인증실패', '잘못된 인증번호입니다');
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        } catch(error) {
            console.error('Error', error);
        }
    };

    //회원가입
    const signUp = async() => {

        if(!email || !password || !passwordChk || !name || !phone || !certificationNum){
            Alert.alert('입력 오류', '모든 내용을 입력해주세요.');
            return;
        }

        if (!emailDupChk){
            Alert.alert('아이디 중복 체크', '아이디 중복 확인을 해주세요.');
            return;
        }

        if (!passwordRegex.test(password)) {
            Alert.alert('비밀번호 오류', '비밀번호는 영문, 숫자, 기호가 조합된 8자리 이상이어야 합니다.');
            return;
        }

        if (password !== passwordChk) {
            Alert.alert('비밀번호 오류', '비밀번호가 일치하지 않습니다.');
            return;
        }

        if (isNaN(selectedYear) || isNaN(selectedMonth) || isNaN(selectedDay)) {
            Alert.alert('선택 오류', '생년월일을 올바르게 선택해주세요.');
            return;
        }
        
        if(!termsCheck){
            Alert.alert('정책 동의 필요', '회원가입 정책에 동의해주세요.');
            return;
        }


        // API 형식에 맞추어 전달되는 값 변경

        //월, 일 10 이하 값에서 0 붙여주기
        let month = '';
        if(selectedMonth < 10){
            month =`0${selectedMonth}`;
        }else{
            month = selectedMonth;
        }

        let day = '';
        if(selectedDay < 10){
            day =`0${selectedDay}`;
        }else{
            day = selectedDay;
        }

        console.log(selectedYear);

        let birth = `${selectedYear}-${month}-${day}`;

        // 약관 동의
        let termsAgree = '';
        if(termsCheck === true){
            termsAgree = 'Y';
        }else{
            termsAgree = 'N';
        }

        console.log(email);
        console.log(email, password, name, birth, selectedGender, phone, certificationNum, termsAgree);



        // 회원가입 데이터 입력
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/Member.ajax.php`;
        const data = {
            user_id: email,
            user_pw: password,
            user_name: name,
            user_birth: birth,
            user_gender: selectedGender,
            user_hp: phone,
            user_terms: termsAgree,
        };

        try{
            const response = await axios.post(endpoint, data)
                .then(function(response){
                    console.log(response.data);
                    if(response.data.msg === 'Y'){
                        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
                        //navigation.navigate('Main');
                    }else{
                        Alert.alert('회원가입 실패', '회원가입이 실패하였습니다.');
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        } catch(error) {
            console.error('Error', error);
        }

        //Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        //navigation.navigate('Main');
    }

    return(
        <SafeAreaView>
            <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="회원가입" />
                </View>
                <View style={styles.commonPadding}>
                    {/* 아이디 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>아이디</TextKR>
                        <View style={styles.inputAndBtn}>
                            <View style={[styles.inputView, {width:screenWidth - 130}]}>
                                <TextInput
                                    value={email}
                                    placeholder='이메일 아이디를 입력해주세요'
                                    onChangeText={mailCheck}
                                />
                            </View>
                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnLine, {width:80, height: 49}]}
                                onPress={duplicateCheck}
                            >
                                <TextKR style={[styles.btnTxt, {fontSize:14}]}>중복확인</TextKR>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 비밀번호 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>비밀번호</TextKR>
                        <View style={styles.inputView}>
                            <TextInput
                                value={password}
                                placeholder='비밀번호를 입력해주세요'
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry
                            />
                        </View>
                            {!isPasswordValid && password.length > 0 && (
                            <TextKR style={styles.inputInfo}>영문,숫자,기호를 조합해 6자 이상 입력해주세요</TextKR>)}
                        <View style={styles.inputView}>
                            <TextInput
                                value={passwordChk}
                                placeholder='비밀번호를 한 번 더 입력해주세요'
                                onChangeText={(text) => setPasswordChk(text)}
                                secureTextEntry
                            />
                        </View>
                        {!isPasswordMatched && passwordChk.length > 0 && (
                            <TextKR style={styles.inputInfo}>비밀번호가 일치하지 않습니다.</TextKR>
                        )}
                    </View>

                    {/* 이름 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>이름</TextKR>
                        <View style={styles.inputView}>
                            <TextInput
                                value={name}
                                onChangeText={(text) => setName(text)}
                                placeholder='이름을 입력해주세요'
                            />
                        </View>
                    </View>

                    {/* 생년월일 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>생년월일</TextKR>
                        <View style={styles.selectBoxView}>
                                <View style={styles.selContainer}>
                                <View style={styles.pickerContainer}>
                                    <SelectBox
                                        options={years}
                                        selectedValue={selectedYear}
                                        onValueChange={setSelectedYear}
                                    />
                                    </View>

                                    <View style={styles.pickerContainer}>
                                    <SelectBox
                                        options={months}
                                        selectedValue={selectedMonth}
                                        onValueChange={setSelectedMonth}
                                    />
                                    </View>

                                    <View style={styles.pickerContainer}>
                                    <SelectBox
                                        options={days}
                                        selectedValue={selectedDay}
                                        onValueChange={setSelectedDay}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* 성별 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>성별</TextKR>
                        <View style={styles.genderView}>

                                <TouchableOpacity
                                style={[
                                    styles.btnCom,
                                    selectedGender === 'M' ? styles.btnSub : styles.btnDisabled,
                                    { width: '48%', height: 45 }
                                ]}
                                onPress={() => handleSelectGender('M')}
                                >
                                    <TextKR style={[styles.btnTxtMini, { color: selectedGender === 'M' ? '#ffffff' : '#777' }]}>
                                        남자
                                    </TextKR>
                                </TouchableOpacity>

                                <TouchableOpacity
                                style={[
                                    styles.btnCom,
                                    selectedGender === 'G' ? styles.btnSub : styles.btnDisabled,
                                    { width: '48%', height: 45 }
                                ]}
                                onPress={() => handleSelectGender('G')}
                                >
                                    <TextKR style={[styles.btnTxtMini, { color: selectedGender === 'G' ? '#ffffff' : '#777' }]}>
                                        여자
                                    </TextKR>
                                </TouchableOpacity>
                        </View>
                    </View>

                    {/* 연락처 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>연락처</TextKR>
                        <View style={styles.inputAndBtn}>
                            <View style={[styles.inputView, {width:screenWidth - 150}]}>
                                <TextInput
                                    value={phone}
                                    placeholder='휴대폰번호를 숫자만 입력해주세요'
                                    onChangeText={(text) => setPhone(text)}
                                    keyboardType="numeric"
                                />
                            </View>
                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnLine, {width:100, height: 49}]}
                                onPress={smsSend}
                            >
                                <TextKR style={[styles.btnTxt, {fontSize:14}]}>인증번호발송</TextKR>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputAndBtn}>
                            <View style={[styles.inputView, {width:screenWidth - 150}]}>
                                <TextInput
                                    value={certificationNum}
                                    placeholder='인증번호를 입력해주세요'
                                    onChangeText={(text) => setCertificationNum(text)}
                                    keyboardType="numeric"
                                />
                            </View>
                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnMain, {width:100, height: 49}]}
                                onPress={hpCheck}
                            >
                                <TextKR style={[styles.btnTxt, {color:'#fff',fontSize:14}]}>인증확인</TextKR>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 약관동의 */}
                    <View style={styles.joinEach}>
                        <TextKR style={styles.joinTit}>개인정보처리방침 약관</TextKR>
                        <View style={styles.inputView}>
                            <TextInput
                                multiline = {true}     
                                editable = {true}  
                                scrollEnabled={true}
                                value={terms}                        
                                style={styles.textArea}
                                selectTextOnFocus={false}
                                showSoftInputOnFocus={false} 
                                caretHidden={true}
                            />
                        </View>
                        <CustomCheckBox 
                            label="개인정보처리방침에 동의합니다(필수)" 
                            onCheckChange={handleCheckChange} 
                        />
                    </View>

                    {/* 회원가입 버튼 */}
                    <TouchableOpacity 
                            style={[styles.btnCom, styles.btnMain]} 
                        >
                            <TextKR 
                                style={[styles.btnTxt, {color:'#ffffff'}]}
                                onPress={signUp}
                            >회원가입</TextKR>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Join;
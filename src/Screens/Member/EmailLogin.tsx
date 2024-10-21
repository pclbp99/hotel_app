import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Dimensions,
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Member/styles.js';

import SubHeader from '../../Components/SubHeader';
import CustomCheckBox from '../Member/Components/CheckBox';

const { height: screenHeight } = Dimensions.get('window');

const EmailLogin = ({ props }) => {

    const navigation = useNavigation();
    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginChecked, setLoginChecked] = useState(false);

    const handleCheckChange = (checked) => {
      setLoginChecked(checked); 
    };
  
    const handleLoginPress = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/Login.ajax.php`;
        const data = {
            user_id : email,
            user_pw : password,
        };

        try{
            const response = await axios.post(endpoint, data)
                .then(function(response){
                    console.log(response.data);
                    if(response.data.msg === 'Y'){
                        navigation.navigate('Main'); 
                    }else{
                        Alert.alert('로그인 실패', '아이디 또는 비밀번호가 올바르지 않습니다.');
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        } catch(error) {
            console.error('Error', error);
        }
        // if (email === 'test@rn.com' && password === '1234') {
        //     check.navigate('Main'); 
        // } else {
        //     Alert.alert('로그인 실패', '아이디 또는 비밀번호가 올바르지 않습니다.');
        // }
    };

    return(
        <SafeAreaView>
            <View style={styles.subHeader}>
                <SubHeader title="이메일 로그인" />
            </View>
            <ScrollView style={[stylesIn.loginHeight, {backgroundColor:'#ffffff'}]}>
                <View style={styles.commonPadding}>
                    <View>
                        <TextKR style={styles.emailLoginTit}>이메일 로그인</TextKR>
                    </View>
                    <View>
                        <View style={styles.inputView}>
                            <TextInput 
                                value={email}
                                onChangeText={setEmail}
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
                        <View style={styles.autoLoginChk}>
                            <CustomCheckBox label="자동로그인" onCheckChange={handleCheckChange}/>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={[styles.btnCom, styles.btnMain]} 
                            onPress={handleLoginPress}
                        >
                            <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>로그인</TextKR>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.btnCom, styles.btnSub]}
                            onPress={() => navigateTo('Join')}
                        >
                            <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>회원가입</TextKR>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnCom, styles.btnLine]}>
                            <TextKR style={[styles.btnTxt]}>계정 찾기</TextKR>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesIn = StyleSheet.create({
    loginHeight: {
        width:'100%',
        height:screenHeight,
    },
});


export default EmailLogin;

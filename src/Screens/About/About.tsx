import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/About/styles.js';

import SubHeader from '../../Components/SubHeader';
import AboutImage from '../../Assets/Images/About.jpg';
import Logo from '../../Assets/Icons/logo_black.png';


const About = () => {

    const navigation = useNavigation(); 

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const aboutTxt = [
        {
            title: '특별한 순간을 위한 완벽한 선택',
            contents: 'RN호텔에 오신 것을 환영합니다.\n저희 호텔은 고객님께 최고의 편안함과 럭셔리를 제공하기 위해 세심한 배려와 정성을 다하고 있습니다.\n\n도심 속에서의 여유로운 휴식,\n자연과 조화를 이룬 조용한 힐링,\n비즈니스와 레저를 모두 아우르는 다양한 서비스를 만나보세요\n\nRN호텔에서 잊지 못할 추억을 만들어보세요\n고객님의 소중한 순간을 위해 최선을 다하겠습니다\n지금 바로 예약하고 특별한 여정을 시작하세요!'
        }
    ]

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="호텔 소개" />
                </View>
                <View>
                    <View style={styles.commonPaddingVt}>
                        <Image source={AboutImage} />
                    </View>
                    <View style={styles.commonPaddingHr}>
                        <Image source={Logo} style={{marginBottom:10}}/>
                        <TextKR style={styles.aboutTit}>{aboutTxt[0].title}</TextKR>
                        <TextKR style={{marginVertical:20}}>―</TextKR>
                        <TextKR style={{marginBottom:50}}>{aboutTxt[0].contents}</TextKR>
                    </View>
                    <View style={[styles.commonPaddingHr, {paddingBottom:10}]}>
                        <TouchableOpacity 
                            style={[styles.btnCom100, styles.btnMain]} 
                            onPress={() => navigateTo('Reservation')}
                        >
                            <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default About;
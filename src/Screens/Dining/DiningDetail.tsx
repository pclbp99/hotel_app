import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from './styles.js';
import TotImg from '../../Assets/Images/Dining01.jpg';

const DiningDetail = () => {

    const route = useRoute();
    const {diningId, dn_contents} = route.params;

    const [detail, setDetail] = useState([]);

    const getDiningList = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/DiningDetail.ajax.php?id=${diningId}`;
        
        try{
            const response = await axios.get(endpoint)
            .then(function(response){
                //console.log('dining',response.data.data);
                setDetail(response.data.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }catch(error){
            console.error('Error', error);
        }
    };

    useEffect(() => {
        //console.log(dn_contents);
        getDiningList();
    }, []);


    const { width } = useWindowDimensions();

    const source = {
        html: `
            ${detail.dn_detail}
        `
    }

    const [diningData, setdiningData] = useState(null);

    const parseData = (sub) => {
        const [locationPart, telPart, seatPart] = sub?.split('+');
        const location = locationPart.split(': ')[1];
        const tel = telPart.split(': ')[1];
        const seat = seatPart.split(': ')[1];
    
        return { location, tel, seat };
    };
    
    useEffect(() => {
        //console.log(roomId, pr_contents);
        if (dn_contents) {
            const parsed = parseData(dn_contents);
            setdiningData(parsed);
        }
    }, [dn_contents]);


    return (
        <ScrollView>
            <View style={styles.roomContainer}>
                <View>
                    <Image source={{uri:detail.dn_img}} style={styles.dnImage}/>

                    <TextEN style={styles.dnTitEN}>{detail.dn_subject}</TextEN>
                    <TextKR style={styles.dnTitKR}>{detail.dn_name}</TextKR>
                    <TextKR style={styles.dnSub}>{detail.dn_simple}</TextKR>

                    <View style={styles.dnInfo}>
                        {/*<TextKR style={styles.dnTit}>운영시간</TextKR>
                        <TextKR>[점심]</TextKR>
                        <TextKR style={{marginBottom: 20}}>{lunchTime}</TextKR>
                        <TextKR>[저녁]</TextKR>
                        <TextKR style={{marginBottom: 20}}>{dinnerTime}</TextKR>

                        <TextKR style={styles.dnTit}>주차정보</TextKR>
                        <TextKR>{parkInfo}</TextKR>*/}
                        <RenderHtml
                            contentWidth={width}
                            source={source}
                        />
                    </View>

                    <View style={styles.dnInfo}>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>위치</TextKR>
                            <TextKR>{diningData?.location}</TextKR>
                        </View>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>문의</TextKR>
                            <TextKR>{diningData?.tel}</TextKR>
                        </View>
                        <View style={styles.infoLine}>
                            <TextKR style={styles.infoTit}>좌석수</TextKR>
                            <TextKR>{diningData?.seat}</TextKR>
                        </View>
                    </View>
                </View>

                <TouchableOpacity 
                    style={[styles.btnCom, styles.btnMain]} 
                >
                    <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DiningDetail;
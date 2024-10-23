import React, { useState, useEffect } from 'react';
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
import styles from '../../Screens/Rooms/styles.js';
import StandardSwiper from './Components/StandardSwiper';


const RoomDetails = () => {

    const route = useRoute();
    const {roomId, pr_contents} = route.params;

    const [detail, setDetail] = useState([]);

    const getRoomsDetail = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/ParlorDetail.ajax.php?id=${roomId}`;
       
        try{
            const response = await axios.get(endpoint)
            .then(function(response){
                //console.log(response.data.data);
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
        //console.log(pr_contents);
        getRoomsDetail();
    }, []);

    const { width } = useWindowDimensions();

    const source = {
        html: `
            ${detail.pr_detail}
        `
    }


    const [roomData, setRoomData] = useState(null);

    const parseData = (sub) => {
        const [personnelPart, costPart, timePart] = sub?.split('+');
        const personnelMatch = personnelPart.match(/\d+/g); 
        const personnel = {
            standard: personnelMatch ? personnelMatch[0] : null,
            max: personnelMatch ? personnelMatch[1] : null,
        };
        const cost = costPart?.split(': ')[1];
        const time = timePart?.split(': ')[1];
        const [checkIn, checkOut] = time.split('~').map((t) => t.trim());
    
        return { personnel, cost, checkIn, checkOut };
    };
    
    useEffect(() => {
        //console.log(roomId, pr_contents);
        if (pr_contents) {
            const parsed = parseData(pr_contents);
            setRoomData(parsed);
        }
    }, [pr_contents]);


    return(
        <ScrollView>
            <View style={styles.roomContainer}>
                {/*<TextKR>Room ID: {roomId}</TextKR>*/}
                <StandardSwiper />

                <TextEN style={styles.roomTit}>{detail.pr_subject}</TextEN>
                <TextKR style={styles.roomSub}>{detail.pr_simple}</TextKR>

                <View style={styles.roomInfoLine}>
                    <View>
                        <TextKR style={styles.roomInfoLeft}>기준 {roomData?.personnel?.standard}인 / 최대 {roomData?.personnel?.max}인</TextKR>
                        <TextKR style={styles.roomInfoLeft}>체크인 {roomData?.checkIn} ~ 체크아웃 {roomData?.checkOut}</TextKR>
                    </View>
                    <View style={styles.roomInfoRight}>
                        <TextKR style={[styles.roomInfoLeft, {marginRight:5}]}>1박</TextKR>
                        <TextEN style={styles.roomPrice}>{roomData?.cost}원</TextEN>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <TextKR style={styles.infoTit}>기본정보</TextKR>
                    <RenderHtml
                        contentWidth={width}
                        source={source}
                    />
                </View>
                
                {/*<View style={styles.infoBox}>
                    <TextKR style={styles.infoTit}>기본정보</TextKR>
                    {Object.values(basicInfo).map((basicItem, index) => (
                        <TextKR key={index} style={styles.infoCon}>
                            {basicItem}
                        </TextKR>
                    ))}
                </View>

                <View style={[styles.infoBox, {marginBottom: 30}]}>
                    <TextKR style={styles.infoTit}>시설서비스</TextKR>
                    {Object.values(service).map((serviceItem, index) => (
                        <TextKR key={index} style={styles.infoCon}>
                            {serviceItem}
                        </TextKR>
                    ))}
                </View>*/}


                <TouchableOpacity 
                    style={[styles.btnCom, styles.btnMain]} 
                    //onPress={() => navigateTo('Reservation')}
                >
                    <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default RoomDetails;
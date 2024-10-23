import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import TopTabNavigator from '../Rooms/Components/TopTabNavigator';
import axios from 'axios';
import styles from '../../Screens/Rooms/styles.js';
import SubHeader from '../../Components/SubHeader';

const Rooms = () => {

    const route = useRoute();
    const { screen, roomId } = route.params || {};

    useEffect(() => {
        console.log('Received Screen:', screen);  // 화면이름 확인
        console.log('Received Room ID:', roomId); // idx 확인
    }, [route.params]);

    // 객실명 불러오기
    const [rooms, setRooms] = useState([]);

    const getRoomsList = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/Parlor.ajax.php`;
        
        try{
            const response = await axios.get(endpoint)
            .then(function(response){
                //console.log('---', response.data.data);
                setRooms(response.data.data);
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


    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.subHeader}>
                <SubHeader title="객실" />
            </View>
            <View style={styles.tabContainer}>
                <TopTabNavigator initialTab={screen} rooms={rooms}/>
            </View>
        </SafeAreaView>
      );   
};

export default Rooms;

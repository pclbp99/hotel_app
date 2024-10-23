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
import TopTabNavigator from '../Dining/Components/TopTabNavigator';
import axios from 'axios';
import styles from '../../Screens/Dining/styles.js';
import SubHeader from '../../Components/SubHeader';

const Dining = () => {

    const route = useRoute();
    const { screen, diningId } = route.params || {};

    useEffect(() => {
        console.log('Received Screen:', screen);  // 화면이름 확인
        console.log('Received Dining ID:', diningId); // idx 확인
    }, [route.params]);
  
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
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.subHeader}>
                <SubHeader title="다이닝" />
            </View>
            <View style={styles.tabContainer}>
                <TopTabNavigator initialTab={screen} dinings={dining}/>
            </View>
        </SafeAreaView>
      );
};

export default Dining;

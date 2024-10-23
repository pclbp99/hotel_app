import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Promotion/styles.js';

import SubHeader from '../../Components/SubHeader';
import PromotionImg from '../../Assets/Images/Promotion_Image.jpg';

const Promotion = () => {

    const navigation = useNavigation(); 


    const [list, setList] = useState([]);

    const getPromotionList = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/Promtion.ajax.php`;
       
        try{
            const response = await axios.get(endpoint)
            .then(function(response){
                //console.log(response.data.data);
                setList(response.data.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }catch(error){
            console.error('Error', error);
        }
    };

    useEffect(() => {
        getPromotionList();
    }, []);


    /* const promotionList = [
        {
            image: PromotionImg, => pr_img
            title: 'Romantic Moment', => pr_subject
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요', => pr_simple
            date: '2024.01.01 ~ 2024.12.31', => pr_lodgment
        },

        {
            image: PromotionImg,
            title: 'Romantic Moment2',
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요',
            date: '2024.01.01 ~ 2024.12.31',
        },

        {
            image: PromotionImg,
            title: 'Romantic Moment3',
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요',
            date: '2024.01.01 ~ 2024.12.31',
        },
    ];*/

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                    <View style={styles.subHeader}>
                        <SubHeader title="프로모션&패키지" />
                    </View>
                    <View style={styles.commonPadding}>
                        {list.map((item, index) => (
                            <TouchableOpacity
                                style={styles.proEach}
                                onPress={() => navigation.navigate('Detail', {id:item.idx})}
                                key = {index}
                            >
                                <Image source={{uri:item.pr_img}} style={styles.proImg}/>
                                <TextEN style={styles.proTit}>{item.pr_subject}</TextEN>
                                <TextKR style={styles.proCon}>{item.pr_simple}</TextKR>
                                <TextEN style={styles.proDate}>{item.pr_lodgment}</TextEN>
                            </TouchableOpacity>
                        ))}

                         {/*<TouchableOpacity
                            style={styles.proEach}
                            onPress={() => navigateTo('Detail')}
                        >
                            <Image source={getPromotionList.pr_img} style={styles.proImg}/>
                            <TextEN style={styles.proTit}>{promotionList[0].title}</TextEN>
                            <TextKR style={styles.proCon}>{promotionList[0].content}</TextKR>
                            <TextEN style={styles.proDate}>{promotionList[0].date}</TextEN>
                        </TouchableOpacity>

                       <TouchableOpacity
                            style={styles.proEach}
                        >
                            <Image source={promotionList[1].image} style={styles.proImg}/>
                            <TextEN style={styles.proTit}>{promotionList[1].title}</TextEN>
                            <TextKR style={styles.proCon}>{promotionList[1].content}</TextKR>
                            <TextEN style={styles.proDate}>{promotionList[1].date}</TextEN>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.proEach}
                        >
                            <Image source={promotionList[2].image} style={styles.proImg}/>
                            <TextEN style={styles.proTit}>{promotionList[2].title}</TextEN>
                            <TextKR style={styles.proCon}>{promotionList[2].content}</TextKR>
                            <TextEN style={styles.proDate}>{promotionList[2].date}</TextEN>
                        </TouchableOpacity> */}
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
}


export default Promotion;
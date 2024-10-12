import React from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
  

import Swiper from 'react-native-swiper';
import PromotionImage from '../../../Assets/Images/Promotion_Image.jpg';
import TextEN from '../../../../TextEN';
import TextKR from '../../../../TextKR';

const data = [
    {
        image: PromotionImage,
        title: 'Romantic Moment',
        description: '일생에 단 한번, \n소중한 사람에게 로맨틱한 순간을 선물해보세요',
        date: '2024.01.01 ~ 2024.12.31'
    },
    {
        image: PromotionImage,
        title: 'Romantic Moment 2',
        description: '또 다른 특별한 순간을 준비하세요',
        date: '2024.02.01 ~ 2024.12.31'
    }
]

const Promotion = () => {

    const renderItem = (item) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image}/>
            <TouchableOpacity>
                <TextEN style={styles.proTitle}>{item.title}</TextEN>
                <TextKR style={styles.proCon}>{item.description}</TextKR>
            </TouchableOpacity>
            <TextEN style={styles.proDate}>{item.date}</TextEN>
        </View>
    );

    return (
        <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            dotColor='rgba(0, 0, 0, 0.2)'
            activeDot={<View style={styles.activeDot}/>} 
            activeDotColor='#1e1e1e'
            paginationStyle={{ bottom: 0 }}
        >

            {data.map((item, index) => (
                <View key={index}>
                    {renderItem(item)}
                </View>
            ))}

      </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 450,
    },

    slide:{},

    image: {
        width: '100%',
        height: 250, // 항상 고정된 높이 설정
        resizeMode: 'cover', // 이미지 비율을 유지하면서 화면에 맞게 조정
        marginBottom:20,
    },

    proTitle: {
        fontSize: 20,
        marginBottom:10,
    },

    proCon:{
        marginBottom: 20,
        fontSize:16,
    },

    proDate: {
        color:'#777',
    },

    activeDot: {
        backgroundColor: '#1e1e1e', // 색상 설정
        width: 16, // 너비 설정 (긴 타원)
        height: 8, // 높이 설정
        borderRadius: 4, // 타원 모양으로 만들기 위해 절반 값으로 설정
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
  })

export default Promotion;
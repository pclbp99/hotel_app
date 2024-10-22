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
import styles from '../../Screens/Promotion/styles.js';

import SubHeader from '../../Components/SubHeader';
import PromotionImg from '../../Assets/Images/Promotion_Image.jpg';

const Promotion = () => {

    const navigation = useNavigation(); 

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const promotionList = [
        {
            image: PromotionImg,
            title: 'Romantic Moment',
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요',
            date: '2024.01.01 ~ 2024.12.31',
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
    ];

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                    <View style={styles.subHeader}>
                        <SubHeader title="프로모션&패키지" />
                    </View>
                    <View style={styles.commonPadding}>
                        <TouchableOpacity
                            style={styles.proEach}
                            onPress={() => navigateTo('Detail')}
                        >
                            <Image source={promotionList[0].image} style={styles.proImg}/>
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
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
}


export default Promotion;
import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Promotion/styles.js';

import SubHeader from '../../Components/SubHeader';
import PromotionImg from '../../Assets/Images/Promotion_Image.jpg';

const Detail = () => {

    const promotionDetail = [
        {
            image: PromotionImg,
            title:'Romantic Moment',
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요',
            dateStart: '2024.01.01 ~ 2024.12.31',
            dateEnd: '2024.01.01 ~ 2024.12.31',
            price: {
                sunToThu: '550,000',
                fri: '650,000',
                satAndHoliday: '750,000',
            },
            benefits: {
                bnf01: '스위트룸 1박',
                bnf02: '객실 내 20만원 상당 로맨틱 어메니티 셋업',
                bnf03: '즉석 필름 카메라 대여 서비스 및 필름 10매',
                bnf04: '수영장 성인 2인 횟수 무제한',
                bnf05: '스파 성인 2인 횟수 무제한',
                bnf06: '피트니스 성인 2인 횟수 무제한',
            },
            notification: {
                not01: '상기 금액은 세금 및 봉사료 별도입니다',
                not02: '투숙 일자마다 금액이 상이합니다',
            }
        },
    ];

    const { image, title, content, dateStart, dateEnd, price, benefits, notification } = promotionDetail[0];

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                    <View style={styles.subHeader}>
                        <SubHeader title="프로모션&패키지" />
                    </View>
                    <View style={styles.commonPaddingVt}>
                        <Image source={image} style={styles.detailImg}/>
                        <View style={styles.commonContainer}>
                            <TextEN style={styles.detailTit}>{title}</TextEN>
                            <TextKR style={styles.detailCon}>{content}</TextKR>
                            <View style={styles.detailDateLine}>
                                <TextKR style={[styles.detailDate, {marginRight:10}]}>예약기간</TextKR>
                                <TextEN style={styles.detailDate}>{dateStart}</TextEN>
                            </View>
                            <View style={styles.detailDateLine}>
                                <TextKR style={[styles.detailDate, {marginRight:10}]}>숙박기간</TextKR>
                                <TextEN style={styles.detailDate}>{dateEnd}</TextEN>
                            </View>
                        </View>
                        <View style={styles.priceBox}>
                            <View style={styles.priceLine}>
                                <TextEN>Sun - Thu</TextEN>
                                <TextKR style={styles.priceWon}>{price.sunToThu}원</TextKR>
                            </View>
                            <View style={styles.priceLine}>
                                <TextEN>Fri</TextEN>
                                <TextKR style={styles.priceWon}>{price.fri}원</TextKR>
                            </View>
                            <View style={styles.priceLine}>
                                <TextEN>Sat, Holiday</TextEN>
                                <TextKR style={styles.priceWon}>{price.satAndHoliday}원</TextKR>
                            </View>
                        </View>
                        <View style={styles.commonContainer}>
                            <TextKR style={styles.packageTit}>패키지 혜택</TextKR>
                            <View style={{paddingHorizontal:5}}>
                                {Object.values(benefits).map((benefit, index) => (
                                    <TextKR key={index} style={styles.benefitItem}>
                                    · {benefit}
                                    </TextKR>
                                ))}

                                <View style={styles.notificationBox}>
                                    {Object.values(notification).map((notificate, index) => (
                                        <TextKR key={index} style={styles.notificateItem}>
                                        ※ {notificate}
                                        </TextKR>
                                    ))}
                                </View>
                            </View>
                        </View>
                            
                        <View style={styles.commonPaddingHr}>
                            <TouchableOpacity 
                                style={[styles.btnCom, styles.btnMain]} 
                                //onPress={() => navigateTo('Reservation')}
                            >
                                <TextKR style={[styles.btnTxt, {color:'#ffffff'}]}>예약하기</TextKR>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
}


export default Detail;
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions 
} from 'react-native';

import axios from 'axios';
import RenderHtml from 'react-native-render-html';

import TextKR from '../../../TextKR';
import TextEN from '../../../TextEN';
import styles from '../../Screens/Promotion/styles.js';

import SubHeader from '../../Components/SubHeader';
import PromotionImg from '../../Assets/Images/Promotion_Image.jpg';

const Detail = ( {route} ) => {

    const {id} = route.params;
    console.log(id);

    const [detail, setDetail] = useState([]);

    const getPromotionDetail = async() => {
        const url = 'https://routidoo001.cafe24.com/api';
        const endpoint = `${url}/PromtionDetail.ajax.php?id=${id}`;
       
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
        getPromotionDetail();
        //dayCost();
    }, []);

    const dayCost = () => {
        console.log('e', detail.pr_contents?.split('|'));

        let sub = detail.pr_contents?.split('|');

        const parseData = (sub) => {
            const [namePart, costPart] = sub?.split('+');
            const name = namePart?.split(': ')[1];
            const cost = costPart?.split(': ')[1];
            return { name, cost };
        }

        return(
            <View>
                {sub?.map((item, index) => {
                    const {name, cost} = parseData(item);
                    return(
                        <View style={styles.priceLine}>
                            <TextEN>{name}</TextEN>
                            <TextKR style={styles.priceWon}>{cost}원</TextKR>
                        </View>
                    )
                })}
            </View>
        );

    };

    /*const promotionDetail = [
        {
            image: PromotionImg, => pr_img
            title:'Romantic Moment', => pr_subject
            content: '일생에 단 한번,\n소중한 사람에게 로맨틱한 순간을 선물해보세요', => pr_simple
            dateStart: '2024.01.01 ~ 2024.12.31', => pr_lodgment
            dateEnd: '2024.01.01 ~ 2024.12.31', => pr_reservation
            price: { => pr_contents
                sunToThu: '550,000', => name, cost
                fri: '650,000',
                satAndHoliday: '750,000',
            },
            benefits: { => pr_detail
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

    const { image, title, content, dateStart, dateEnd, price, benefits, notification } = promotionDetail[0];*/

    const { width } = useWindowDimensions();

    const source = {
        html: `
            ${detail.pr_detail}
        `
    }

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                    <View style={styles.subHeader}>
                        <SubHeader title="프로모션&패키지" />
                    </View>
                    <View style={styles.commonPaddingVt}>
                        <Image source={{uri:detail.pr_img}} style={styles.detailImg}/>
                        <View style={styles.commonContainer}>
                            <TextEN style={styles.detailTit}>{detail.pr_subject}</TextEN>
                            <TextKR style={styles.detailCon}>{detail.pr_simple}</TextKR>
                            <View style={styles.detailDateLine}>
                                <TextKR style={[styles.detailDate, {marginRight:10}]}>예약기간</TextKR>
                                <TextEN style={styles.detailDate}>{detail.pr_lodgment?.replaceAll('-', '.')}</TextEN>
                            </View>
                            <View style={styles.detailDateLine}>
                                <TextKR style={[styles.detailDate, {marginRight:10}]}>숙박기간</TextKR>
                                <TextEN style={styles.detailDate}>{detail.pr_reservation?.replaceAll('-', '.')}</TextEN>
                            </View>
                        </View>
                        <View style={styles.priceBox}>
                            {dayCost()}
                        </View>
                        <View style={styles.commonContainer}>
                            <TextKR style={styles.packageTit}>패키지 혜택</TextKR>
                            <View style={{paddingHorizontal:5}}>
                                <RenderHtml
                                    contentWidth={width}
                                    source={source}
                                />
                                {/*{Object.values(benefits).map((benefit, index) => (
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
                                </View>*/}
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
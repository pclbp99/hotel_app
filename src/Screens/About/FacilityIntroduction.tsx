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
import styles from '../../Screens/About/styles.js';

import SubHeader from '../../Components/SubHeader';
import Fac01 from '../../Assets/Images/Facility01.jpg';
import Fac02 from '../../Assets/Images/Facility02.jpg';
import Fac03 from '../../Assets/Images/Facility03.jpg';
import Fac04 from '../../Assets/Images/Facility04.jpg';
import Fac05 from '../../Assets/Images/Facility05.jpg';


const FacilityIntroduction = () => {

    const FacilityList = [
        {
            image: Fac01,
            titleEN: 'Swimming Pool',
            titleKR: '수영장',
        },
        {
            image: Fac02,
            titleEN: 'Fitness Center',
            titleKR: '피트니스',
        },
        {
            image: Fac03,
            titleEN: 'SPA',
            titleKR: '스파',
        },
        {
            image: Fac04,
            titleEN: 'Infinity Pool',
            titleKR: '인피니티 풀',
        },
        {
            image: Fac05,
            titleEN: 'Laundry',
            titleKR: '세탁실',
        },
    ];

    return(
        <SafeAreaView>
             <ScrollView style={[{backgroundColor:'#ffffff'}]}>
                <View style={styles.subHeader}>
                    <SubHeader title="시설 안내" />
                </View>
                <View style={styles.commonPadding}>
                    <View style={styles.facEachLine}>
                        <View style={styles.facEach}>
                            <Image source={FacilityList[0].image} style={styles.facImage} />
                            <TextEN style={styles.facTitEN}>{FacilityList[0].titleEN}</TextEN>
                            <TextKR style={styles.facTitKR}>{FacilityList[0].titleKR}</TextKR>
                        </View>
                        <View style={styles.facEach}>
                            <Image source={FacilityList[1].image} style={styles.facImage} />
                            <TextEN style={styles.facTitEN}>{FacilityList[1].titleEN}</TextEN>
                            <TextKR style={styles.facTitKR}>{FacilityList[1].titleKR}</TextKR>
                        </View>
                    </View>

                    <View style={styles.facEachLine}>
                        <View style={styles.facEach}>
                            <Image source={FacilityList[2].image} style={styles.facImage} />
                            <TextEN style={styles.facTitEN}>{FacilityList[2].titleEN}</TextEN>
                            <TextKR style={styles.facTitKR}>{FacilityList[2].titleKR}</TextKR>
                        </View>
                        <View style={styles.facEach}>
                            <Image source={FacilityList[3].image} style={styles.facImage} />
                            <TextEN style={styles.facTitEN}>{FacilityList[3].titleEN}</TextEN>
                            <TextKR style={styles.facTitKR}>{FacilityList[3].titleKR}</TextKR>
                        </View>
                    </View>

                    <View style={[styles.facEachLine, {marginBottom:0}]}>
                        <View style={styles.facEach}>
                            <Image source={FacilityList[4].image} style={styles.facImage} />
                            <TextEN style={styles.facTitEN}>{FacilityList[4].titleEN}</TextEN>
                            <TextKR style={styles.facTitKR}>{FacilityList[4].titleKR}</TextKR>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default FacilityIntroduction;
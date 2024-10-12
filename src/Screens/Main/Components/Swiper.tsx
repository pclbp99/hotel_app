import React from 'react';

import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';
  

import Swiper from 'react-native-swiper';
import Main01 from '../../../Assets/Images/Main_Slide01.jpg';
import Main02 from '../../../Assets/Images/Main_Slide02.jpg';
import MainTitle from '../../../Assets/Images/Main_Title.png';

const SwiperSlide = () => {
    return (
        <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            dotColor='rgba(255,255,255,0.5)'
            activeDotColor='#1e1e1e'
        >
            <View style={styles.slide}>
                <ImageBackground source={Main01} resizeMode="cover" style={styles.image}>
                    <View style={styles.title}>
                        <Image source={MainTitle} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.slide}>
                <ImageBackground source={Main02} resizeMode="cover" style={styles.image}>
                    <View style={styles.title}>
                        <Image source={MainTitle} />
                    </View>
                </ImageBackground>
            </View>
      </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 600, 
    },

    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 160
    }
  })

export default SwiperSlide;
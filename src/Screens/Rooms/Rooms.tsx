import React, { useEffect } from 'react';
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

import styles from '../../Screens/Rooms/styles.js';
import SubHeader from '../../Components/SubHeader';

const Rooms = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const { screen = '스탠다드' } = route.params || {};
  
    useEffect(() => {
        navigation.navigate(screen);
      }, [screen]);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.subHeader}>
                <SubHeader title="객실" />
            </View>
            <View style={styles.tabContainer}>
                <TopTabNavigator />
            </View>
        </SafeAreaView>
      );
};

export default Rooms;

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
import TopTabNavigator from '../Dining/Components/TopTabNavigator';

import styles from '../../Screens/Dining/styles.js';
import SubHeader from '../../Components/SubHeader';

const Dining = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const { screen = '테이스트 오브 테라스' } = route.params || {};
  
    useEffect(() => {
        navigation.navigate(screen);
      }, [screen]);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.subHeader}>
                <SubHeader title="다이닝" />
            </View>
            <View style={styles.tabContainer}>
                <TopTabNavigator />
            </View>
        </SafeAreaView>
      );
};

export default Dining;

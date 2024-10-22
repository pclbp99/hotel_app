import React, { useState, useRef } from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
} from 'react-native';

import Standard from '../../../Assets/Images/Standard.jpg';
import Deluxe from '../../../Assets/Images/Deluxe.jpg';
import Suite from '../../../Assets/Images/Suite.jpg';
import TextKR from '../../../../TextKR';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth;

const images = [
    { image: Suite },
    { image: Standard },
    { image: Deluxe },
];

const SuiteSwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const flatListRef = useRef(null);

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50, // 최소 50%가 보여질 때 슬라이드가 인식됨
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index + 1); // 인덱스는 1부터 시작하도록 설정
        }
    }).current;

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={itemWidth}
                decelerationRate="fast"
                contentContainerStyle={styles.contentContainer}
                onViewableItemsChanged={onViewableItemsChanged} // 변경된 핸들러 등록
                viewabilityConfig={viewabilityConfig}
                scrollEventThrottle={16}
                bounces={false}
            />

            <View style={styles.pagination}>
                <TextKR style={styles.paginationText}>
                    {currentIndex} / {images.length}
                </TextKR>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {},
    slide: {
        width: itemWidth,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    container: {
        position: 'relative',
    },
    pagination: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    paginationText: {
        color: '#fff',
        fontSize: 12,
    },
});

export default SuiteSwiper;

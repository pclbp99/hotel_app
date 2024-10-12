import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
} from 'react-native';

import Facility01 from '../../../Assets/Images/Facility01.jpg';
import Facility02 from '../../../Assets/Images/Facility02.jpg';
import Facility03 from '../../../Assets/Images/Facility03.jpg';
import TextKR from '../../../../TextKR';
import TextEN from '../../../../TextEN';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth / 1.75; // 1.2개의 슬라이드를 표시하기 위한 계산

const data = [
    {
        image: Facility01,
        titleEN: 'Standard',
        titleKR: '수영장',
    },
    {
        image: Facility02,
        titleEN: 'Fitness Center',
        titleKR: '피트니스',
    },
    {
        image: Facility03,
        titleEN: 'SPA',
        titleKR: '스파',
    },
];

const RoomsSlider = () => {

  const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <TextEN style={styles.titleEN}>{item.titleEN}</TextEN>
            <TextKR style={styles.titleKR}>{item.titleKR}</TextKR>
        </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      decelerationRate="fast"
      contentContainerStyle={styles.contentContainer}
      bounces={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal:10,
  },

  slide: {
    width: itemWidth,
    overflow: 'hidden',
    marginBottom: 20,
    paddingHorizontal:10,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom:10,
  },

  titleEN: {
    fontSize: 20,
    marginBottom: 2,
  },

  titleKR: {
    fontSize:12,
    color:'#837166',
  },

});

export default RoomsSlider;

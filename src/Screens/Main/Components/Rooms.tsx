import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Standard from '../../../Assets/Images/Standard.jpg';
import Deluxe from '../../../Assets/Images/Deluxe.jpg';
import Suite from '../../../Assets/Images/Suite.jpg';
import TextKR from '../../../../TextKR';
import TextEN from '../../../../TextEN';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth / 1.2; // 1.2개의 슬라이드를 표시하기 위한 계산

const data = [
  {
      image: Standard,
      title: 'Standard',
      description: '호텔 스탠다드 객실은 편안함과 실용성을 갖춘 공간으로, 여행의 피로를 풀기에 최적화된 환경을 제공합니다. 모던한 인테리어와 깔끔한 디자인이 돋보이며, 넉넉한 침대와 편리한 가구 배치로 편안한 휴식을 보장합니다.',
  },
  {
      image: Deluxe,
      title: 'Deluxe',
      description: '디럭스 객실은 여유로운 공간과 세련된 디자인이 조화를 이루는 고급스러운 환경을 제공합니다. 넓은 킹사이즈 침대와 고급 침구가 편안한 숙면을 보장하며, 품격 있는 인테리어와 따뜻한 분위기의 조명으로 아늑한 분위기를 느낄 수 있습니다.',
  },
  {
      image: Suite,
      title: 'Suite',
      description: '스위트 객실은 여유로운 공간과 세련된 디자인이 조화를 이루는 고급스러운 환경을 제공합니다. 최신식 평면 TV, 무료 Wi-Fi, 미니바, 에어컨 등 현대적인 편의 시설이 완비되어 있으며, 고급 욕실에는 별도의 욕조와 샤워 시설이 마련되어 있어 최상의 휴식을 제공합니다.',
  },
];

const RoomsSlider = () => {

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity>
        <TextEN style={styles.title}>{item.title}</TextEN>
        <TextKR>{item.description}</TextKR>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth} // 슬라이드를 하나씩 넘기기 위한 설정
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
    width: '100%',
    height: 200,
    marginBottom:20,
  },

  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RoomsSlider;

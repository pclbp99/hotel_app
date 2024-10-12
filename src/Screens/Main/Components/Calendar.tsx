import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarView = (props) => {

  const { setStart, start, setEnd, end, setModal } = props;

  const [today] = useState(() => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  });

  const handleDayPress = (day) => {
    
    const selectedDate = day.dateString;

    if (start === '') {
      // 시작 날짜가 선택되지 않은 경우
      setStart(selectedDate);
    } else if (selectedDate === start) {
      // 시작 날짜와 같은 날짜를 선택한 경우, 무시
      Alert.alert('같은 날짜를 선택할 수 없습니다.', '다른 날짜를 선택해주세요.');
    } else if (new Date(selectedDate) < new Date(start)) {
      // 선택한 날짜가 시작 날짜보다 앞선 경우, 무시
      Alert.alert('유효하지 않은 날짜', '체크아웃 날짜는 체크인 날짜 이후여야 합니다.');
    } else {
      // 유효한 종료 날짜를 선택한 경우
      setEnd(selectedDate);
      setModal(false); // 모달 닫기
    }
  };

  return (
    <View style={{marginBottom:30}}>
      <Calendar
        theme={{
          arrowColor:'#333',
          todayTextColor:'#333'
        }}
        current={today}
        minDate={today}
        onDayPress={(day) => handleDayPress(day)}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        firstDay={1}
        markedDates={{
          [start]: { selected: true, marked: true, selectedColor: '#333' },
        }}
      />
    </View>
  );
};

export default CalendarView;

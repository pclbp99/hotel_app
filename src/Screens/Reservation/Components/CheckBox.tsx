import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TextKR from '../../../../TextKR';

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onPress: () => void;
  isAllCheckBox?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  isChecked,
  onPress,
  isAllCheckBox = false,
}) => {
 
  const imageSource = isChecked
    ? isAllCheckBox
      ? require('../../../Assets/Icons/checked.png')
      : require('../../../Assets/Icons/checked_brown.png')
    : isAllCheckBox
    ? require('../../../Assets/Icons/checked.png')
    : require('../../../Assets/Icons/checked_gray.png');

  return (
    <TouchableOpacity
      style={[
        styles.checkBoxContainer,
        isAllCheckBox && styles.allCheckBoxContainer,
      ]}
      onPress={onPress}
    >
       <View
        style={[
          styles.checkBox,
          isAllCheckBox
            ? [styles.allCheckBox, isChecked ? styles.allChecked : styles.allUnchecked]
            : styles.individualCheckBox,
        ]}
      >
        <Image source={imageSource} style={styles.checkImage} />
      </View>
      <TextKR
        style={[
          styles.checkBoxLabel,
          isAllCheckBox && styles.allCheckBoxLabel,
        ]}
      >
        {label}
      </TextKR>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  allCheckBoxContainer: {
    marginBottom: 10,
  },

  checkBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  allCheckBox: {
    borderRadius: 2,
    backgroundColor: '#333',
  },

  allChecked: {
    backgroundColor: '#333',
  },

  allUnchecked: {
    backgroundColor: '#d9d9d9',
  },


  individualCheckBox: {
    marginLeft:5,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },

  checkImage: {
    width: 14,
    height: 10,
  },

  checkBoxLabel: {
    color: '#333',
  },

  allCheckBoxLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckBox;

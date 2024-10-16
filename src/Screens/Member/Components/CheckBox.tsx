import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import TextKR from '../../../../TextKR';
import Checked from '../../../Assets/Icons/checked.png';

const CustomCheckBox = ({ label, onCheckChange }) => {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onCheckChange(newChecked); 
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
        <View style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                {isChecked && <Image source={Checked} style={styles.checkboxImage} />}
            </View>
            <TextKR style={styles.label}>{label}</TextKR> 
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },

  checkboxContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'flex-start',
  },

  checkbox: {
    width: 20, 
    height: 20, 
    backgroundColor:'#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
  },

  checkedCheckbox: {
    backgroundColor: '#333',
  },

  checkboxImage: {
    width: 15, 
    height: 15,
  },

  label: {
    fontSize: 14,
  },

});

export default CustomCheckBox;

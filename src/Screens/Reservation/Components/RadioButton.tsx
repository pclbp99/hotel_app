import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

import TextKR from '../../../../TextKR';

const RadioButton = ({ options, onSelect }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0]);
      onSelect(options[0]);
    }
  }, [options]);

  const handlePress = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioButtonContainer}
          onPress={() => handlePress(option)}
        >
          <View style={styles.radioButton}>
            {selectedOption === option && <View style={styles.radioButtonSelected} />}
          </View>
          <TextKR style={styles.radioButtonText}>{option}</TextKR>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  radioButton: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioButtonSelected: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: '#333',
  },

  radioButtonText: {
    marginLeft: 5,
    color:'#333',
  },
});

export default RadioButton;

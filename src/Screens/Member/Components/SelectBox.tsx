import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const CustomSelectBox = ({ options, selectedValue, onValueChange }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleSelect = (value) => {
      onValueChange(value);
      setIsModalVisible(false);
    };
  
    const modalHeight = options.length * 50 > height * 0.5 ? height * 0.5 : undefined;

    return (
      <View>
        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.selectedValue}>
            {options.find(option => option.value === selectedValue)?.label || '-선택-'}
          </Text>
        </TouchableOpacity>
  
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContainer, {modalHeight}]}>
                <ScrollView>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => handleSelect(option.value)}
                    >
                      <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
};

const styles = StyleSheet.create({
    selectBox: {
        paddingTop:12,
        paddingBottom:12,
        paddingRight:10,
        paddingLeft: 10,
        width:'100%',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 3,
        backgroundColor: '#fff',
        height:50,
      },

      selectedValue: {
        fontSize: 16,
        textAlign:'center',
        color:'#333',
      },

      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

      modalContainer: {
        width: '80%',
        height: 500,
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 20,
      },

      option: {
        padding: 15,
      },

      optionText: {
        fontSize: 16,
      },


});

export default CustomSelectBox;

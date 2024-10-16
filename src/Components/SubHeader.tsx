import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Back from '../Assets/Icons/back_arrow.png';
import MenuIcon from '../Assets/Icons/sub_menu.png';
import Menu from './Menu';

import TextKR from '../../TextKR';

const SubHeader = ( props ) => {

  const navigation = useNavigation();

  const [menuOn, setMenuOn] = useState(false);

  const menuOpen = () => {
    setMenuOn(true);
  };

  const menuClose = () => {
    setMenuOn(false);
  };

  return (
    <>
      <View style={styles.headerBox}>
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back} />
          </TouchableOpacity>

          <TextKR style={styles.headerTitle}>{props.title}</TextKR>

          <TouchableOpacity onPress={menuOpen}>
            <Image source={MenuIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Menu menuOn={menuOn} menuClose={menuClose} />
    </>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },

  headerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontFamily:'Roboto-Bold',
  },
  
});

export default SubHeader;

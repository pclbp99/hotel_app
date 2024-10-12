import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Logo from '../Assets/Icons/logo.png';
import MenuIcon from '../Assets/Icons/menu.png';
import Menu from './Menu';

const Header = () => {
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
          <View>
            <Image source={Logo} />
          </View>
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
  
});

export default Header;

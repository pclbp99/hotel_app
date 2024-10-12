import React from 'react';
import { Text as RNText,TextProps } from 'react-native';

interface CustomTextProps extends TextProps {}

const TextKR: React.FC<CustomTextProps> = ({ style, ...rest }) => {
    const customStyle  = {
        fontFamily: 'Roboto-Regular',
        color:'#000000',
        fontSize: 14,
        letterSpacing: -0.5,
    };
    
    return <RNText style={[customStyle, style]} {...rest} />;
}

export default TextKR;
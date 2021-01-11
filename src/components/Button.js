import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const Button = ({ onPress, style, text, textStyle }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  onPress: () => null,
  text: null
};

Button.propTypes = {
  // required
  style: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,

  // optional
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default Button;

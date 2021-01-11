import * as React from 'react';
import { View } from 'react-native';
import { gStyle } from '../constants';

// icons
import SvgBurgerKingLogo from '../icons/Svg.BurgerKingLogo';

const HeaderCenter = () => (
  <View style={gStyle.flexCenter}>
    <SvgBurgerKingLogo />
  </View>
);

export default HeaderCenter;

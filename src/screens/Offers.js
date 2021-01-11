import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderCenter from '../components/HeaderCenter';
import HeaderRight from '../components/HeaderRight';

const Offers = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>Offers Screen</Text>
  </View>
);

Offers.navigationOptions = {
  headerTitle: () => <HeaderCenter />,
  headerRight: () => <HeaderRight />,
  headerStyle: gStyle.navHeaderContainerStyle
};

export default Offers;

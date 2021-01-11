import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderCenter from '../components/HeaderCenter';
import HeaderRight from '../components/HeaderRight';

const Reorder = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>Reorder Screen</Text>
  </View>
);

Reorder.navigationOptions = {
  headerTitle: () => <HeaderCenter />,
  headerRight: () => <HeaderRight />,
  headerStyle: gStyle.navHeaderContainerStyle
};

export default Reorder;

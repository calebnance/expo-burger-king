import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderCenter from '../components/HeaderCenter';
import HeaderRight from '../components/HeaderRight';

const More = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>More Screen</Text>
  </View>
);

More.navigationOptions = {
  headerTitle: () => <HeaderCenter />,
  headerRight: () => <HeaderRight />,
  headerStyle: gStyle.navHeaderContainerStyle
};

export default More;

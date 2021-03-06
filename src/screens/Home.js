import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderCenter from '../components/HeaderCenter';
import HeaderRight from '../components/HeaderRight';

const Home = () => (
  <View style={[gStyle.flex1, gStyle.flexCenter]}>
    <Text>Home Screen</Text>
  </View>
);

Home.navigationOptions = {
  headerTitle: () => <HeaderCenter />,
  headerRight: () => <HeaderRight />,
  headerStyle: gStyle.navHeaderContainerStyle
};

export default Home;

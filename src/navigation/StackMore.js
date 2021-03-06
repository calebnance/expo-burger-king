import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import MoreScreen from '../screens/More';

// icons
import SvgMore from '../icons/Svg.More';

const Icon = ({ focused }) => <SvgMore active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    More: {
      screen: MoreScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'More'
    }
  }
);

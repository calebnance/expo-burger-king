import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import OrderScreen from '../screens/Order';

// icons
import SvgOrder from '../icons/Svg.Order';

const Icon = ({ focused }) => <SvgOrder active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Order: {
      screen: OrderScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'Order'
    }
  }
);

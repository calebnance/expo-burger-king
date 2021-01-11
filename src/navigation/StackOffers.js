import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import OffersScreen from '../screens/Offers';

// icons
import SvgOffers from '../icons/Svg.Offers';

const Icon = ({ focused }) => <SvgOffers active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Offers: {
      screen: OffersScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'Offers'
    }
  }
);

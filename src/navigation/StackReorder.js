import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import ReorderScreen from '../screens/Reorder';

// icons
import SvgReorder from '../icons/Svg.Reorder';

const Icon = ({ focused }) => <SvgReorder active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Reorder: {
      screen: ReorderScreen
    }
  },
  {
    navigationOptions: {
      tabBarIcon: Icon,
      tabBarLabel: 'Reorder'
    }
  }
);

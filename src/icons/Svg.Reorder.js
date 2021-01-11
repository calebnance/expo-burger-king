import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

const SvgReorder = ({ active, size }) => (
  <Svg height={size} viewBox="0 0 24 24" width={size}>
    <Path
      d="M20.193 13.45c-.129-1.283-1.411-1.924-2.18-1.155-.514.513-.514 1.668-.77 2.437-.257.898-1.026 1.667-1.667 2.18-1.54 1.155-3.848 1.155-5.772.77-.897-.257-1.667-.77-2.308-1.41-1.667-1.668-1.667-4.49-.641-6.413.897-1.411 2.436-2.437 4.104-2.437v1.026c0 .385.256.898.897.898.77 0 3.078-1.54 4.104-2.18.257-.129.513-.514.385-.77 0-.128-.385-.513-.513-.641-1.154-.898-1.795-1.411-2.95-2.309-.384-.256-1.154-.641-1.539-.256-.384.384-.256.77-.128 1.41-1.924.129-3.847.898-5.258 2.309-3.463 3.334-3.335 9.106.385 12.184 4.104 3.462 11.927 2.18 13.722-3.078 0-.898.129-1.796.129-2.565z"
      fill={active ? colors.itemActive : colors.itemInactive}
    />
  </Svg>
);

SvgReorder.defaultProps = {
  active: false,
  size: 26
};

SvgReorder.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgReorder;

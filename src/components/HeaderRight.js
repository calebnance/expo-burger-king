import * as React from 'react';
import { View } from 'react-native';
import { gStyle } from '../constants';

// components
import Button from './Button';

const HeaderRight = () => (
  <View style={[gStyle.flexRowAlignCenter, gStyle.pR2]}>
    <Button
      style={gStyle.btnPrimary}
      text="Sign Up"
      textStyle={gStyle.btnPrimaryText}
    />
  </View>
);

/*
const styles = StyleSheet.create({
  playlistItem: {
    borderRadius: 6,
    height: 98,
    flex: 1,
    marginBottom: 24,
    marginRight: 24,
    paddingLeft: 12,
    paddingTop: 12
  },
  playlistTitle: {
    ...gStyle.textSpotifyBold22,
    color: colors.white
  }
});
*/

export default HeaderRight;

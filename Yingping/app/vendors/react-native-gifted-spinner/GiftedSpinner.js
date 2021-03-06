'use strict'

var React = require('react');

var {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform,
  ActivityIndicator
} = require('react-native');

var GiftedSpinner = React.createClass({

  _getSpinner() {
    return (
        <ActivityIndicator
          animating={true}
          size="small"
          {...this.props}
        />
    );
    // if (Platform.OS === 'android') {
    //   return (
    //     <ProgressBarAndroid
    //       style={{
    //         height: 20,
    //       }}
    //       styleAttr="Inverse"
    //       {...this.props}
    //     />
    //   );
    // } else {
    //   return (
    //     <ActivityIndicatorIOS
    //       animating={true}
    //       size="small"
    //       {...this.props}
    //     />
    //   );
    // }
  },

  render() {
    return (
      <View>
        {this._getSpinner()}
      </View>
    );
  },

});


module.exports = GiftedSpinner;

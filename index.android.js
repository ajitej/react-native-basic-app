import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Component7 from './app/components/Component7/Component7';
import Component8 from './app/components/Component8/Component8';
//import Component5 from './app/components/Component5/Component5';
//import Component6 from './app/components/Component6/Component6';

export default class AwesomeProject extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'component7': return (<Component7 navigator={navigator} title="Component7" />)
      case 'component8': return (<Component8 navigator={navigator} res={route.res} title="Component8" />)
    }
  }

  render() {
    return (
      <Image source={require('./images/fire.jpg')}
          style={styles.backgroundImage}>
      <Navigator
        initialRoute={{id: 'component7'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromTop}
      />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

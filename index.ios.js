import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class AwesomeProject extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'component5': return (<Component5 navigator={navigator} title="Component5" />)
      case 'component6': return (<Component6 navigator={navigator} user={route.user} title="Component6" />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

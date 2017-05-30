import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class Component6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      tile: this.props.res.title,
      body: this.props.res.body
    }
  }

  onPress(){
    this.props.navigator.push({
      id: 'component7'
    })
  }

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>{this.state.body}</Text>
        <Button
          onPress={this.onPress.bind(this)}
          title="Go back"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);

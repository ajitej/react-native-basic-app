import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Switch
} from 'react-native';

export default class Component3 extends Component {
  constructor(){
    super();
    this.state = {
      value: "Hello",
      switchValue: false
    }
  }

  onChangeText(value){
    this.setState({
      value: value
    });
  }

  onSubmit(){
    console.log("Input submitted")
  }

  switchOnChange(value){
    this.setState({
      switchValue: value
    });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="enter text!"
          value={this.state.value}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.value}</Text>
        <Switch value={this.state.switchValue}
          onValueChange={(value) => this.switchOnChange(value)}
        ></Switch>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);

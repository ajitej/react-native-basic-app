import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

export default class Component1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Ajitej",
      showName: true,
      message: this.props.message
    }
  }

  /*static defaultProps = {
    message: 'Hi There'
  }*/

  render() {
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text style={styles.welcomeText}>
          Welcome to the App!
        </Text>
        <ModalDropdown options={['option 1', 'option 2']} style={styles.dropDown}>
        </ModalDropdown>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  dropDown: {

  }
});

AppRegistry.registerComponent('Component1', () => Component1);

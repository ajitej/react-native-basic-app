import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Button extends Component{
  render(){
    return(
      <TouchableHighlight onPress={() => {this.props.onPress()}}>
          <View style={styles.button}>
            <Text style={{color: "white"}}>Go Back</Text> 
          </View>
      </TouchableHighlight>
    );  
  }
}

export default class Component8 extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.res.title,
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
        <Text style={styles.text}>{this.state.title}</Text>
        <Text style={styles.text}>{this.state.body}</Text>
        <Button onPress={this.onPress.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
      backgroundColor: "grey",
      padding: 10,
      alignItems: 'center',
      marginTop: 15,
      marginLeft: 100,
      marginRight: 100
    }
});

AppRegistry.registerComponent('Component8', () => Component8);

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Button extends Component{
  render(){
    return(
      <TouchableHighlight onPress={() => {this.props.onPress()}} underlayColor='#fff'>
          <View style={styles.button}>
            <Text style={{color: "black"}}>Submit</Text> 
          </View>
      </TouchableHighlight>
    );  
  }
}

export default class Component7 extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      body: "",
      userId: ""
    }
  }

  postUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId
      })
    })
    .then((response) => response.json())
    .then((response) => {
      this.onPress(response);
    })
  }

  onPress(res){
    this.props.navigator.push({
      id: 'component8',
      res: res
    })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="enter title!"
          placeholderTextColor= 'white'
          style={styles.input}
          onChangeText={(text) => this.setState({title:text})}
        />
        <TextInput
          placeholder="enter body!"
          placeholderTextColor= 'white'
          style={styles.input}
          onChangeText={(text) => this.setState({body:text})}
        />
        <TextInput
          placeholder="enter userId!"
          placeholderTextColor= 'white'
          style={styles.input}
          onChangeText={(text) => this.setState({userId:text})}
        />
        <Button onPress={()=> {this.postUsers()}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      margin: 15,
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      color: 'white'
    },
    button: {
      backgroundColor: "white",
      padding: 10,
      alignItems: 'center',
      marginTop: 15,
      marginLeft: 100,
      marginRight: 100,
      borderRadius:10
    }
});

AppRegistry.registerComponent('Component7', () => Component7);

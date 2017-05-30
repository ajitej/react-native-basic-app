import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Component7 extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      body: "",
      userId: ""
    }
  }

  /*componentDidMount(){
    this.fetchUsers();
  }*/

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
          onChangeText={(text) => this.setState({title:text})}
        />
        <TextInput
          placeholder="enter body!"
          onChangeText={(text) => this.setState({body:text})}
        />
        <TextInput
          placeholder="enter userId!"
          onChangeText={(text) => this.setState({userId:text})}
        />
        <Button 
          onPress={() => this.postUsers()}  
          title="Submit"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component7', () => Component7);

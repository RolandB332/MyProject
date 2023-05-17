import React from 'react';
import {View, Button, Alert} from 'react-native';

class MyComponent extends React.Component {
  handleButtonPress() {
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(responseText => {
        // Handle the response from the server
        console.log(responseText);
        Alert.alert(responseText);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Button title="Send Request" onPress={this.handleButtonPress} />
      </View>
    );
  }
}

export default MyComponent;

import React from "react";
import {TextInput,Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>

    <View>
    <Text>Username:</Text>
    <TextInput/>
    </View>

      <View>
      <Text>Password:</Text>
      <TextInput secureTextEntry={true} style={{color: "black"}}/>
      </View>

      <View style={{flexDirection:'row'}}>
          <Button
          style={{padding:20}}
            //onPress={onPressLearnMore}
            title="Login"
            color="#841584"

          />
          <Button
          //onPress={onPressLearnMore}
          title="Register"
          color="#841584"

          />
      </View>

      <View style={{flexDirection:'column'}}>
      <Text>Sign in with</Text>
          <Button
          style={{padding:20}}
            //onPress={onPressLearnMore}
            title="Google"
            color="#841584"

          />
          <Button
          //onPress={onPressLearnMore}
          title="Facebook"
          color="#841584"

          />

          <Button
          //onPress={onPressLearnMore}
          title="LinkedIn"
          color="#841584"

          />
      </View>


    </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

const styles = {

container:
{
  
},
}

export default createAppContainer(AppNavigator);

import React from "react";
import {TextInput,Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from 'firebase';



   const firebaseConfig = {
    apiKey: "AIzaSyBQcvg-Kj8-XerZLe7S4Ry-zDfBBaDRYd0",
    authDomain: "noco2-b85e8.firebaseapp.com"
   };
   const firebaseApp = firebase.initializeApp(firebaseConfig);


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


class Login extends React.Component
 {

   constructor(props)
   {
     super(props)

     this.state=({
       email:'',
       pass:''
     })
   }


   signupUser = (email,pass) =>
   {
     try {
       if(this.state.pass.length<6)
       {
         alert("Please enter stronger password ")
         return;
       }
       firebase.auth().createUserWithEmailAndPassword(email,pass)
     }
     catch(error)
     {
       console.log(error.toString());
     }
   }

   loginUser = (email,pass) =>
   {
    firebase.auth().signInWithEmailAndPassword(email,pass)
    try {
      
      
      this.props.navigation.navigate('HomeScreen');
    }
    catch(error)
    {
      alert("cant login")
    }
      
     
   }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>

    <View>
    <Text>Username:</Text>
    <TextInput
      onChangeText={(email)=> this.setState({email})}
    />
    </View>

      <View>
      <Text>Password:</Text>
      <TextInput
      secureTextEntry={true} style={{color: "black"}}
      onChangeText={(pass)=> this.setState({pass})}
      />
      </View>

      <View style={{flexDirection:'row'}}>
          <Button
          style={{padding:20}}
            title="Login"
            color="#841584"
            onPress={()=> this.loginUser(this.state.email,this.state.pass)}
          />
          <Button
         
          onPress={()=> this.signupUser(this.state.email,this.state.pass)}
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
  },

  HomeScreen: {
    screen: HomeScreen,
  },
});


const styles = {

container:
{

},
}

export default createAppContainer(AppNavigator);

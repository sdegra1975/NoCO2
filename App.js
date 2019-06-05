import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
              //accessibilityLabel="Learn more about this purple button"
            />
            <Button
            //onPress={onPressLearnMore}
            title="Register"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />
        </View>

        <View style={{flexDirection:'column'}}>
        <Text>Sign in with</Text>
            <Button
            style={{padding:20}}
              //onPress={onPressLearnMore}
              title="Google"
              color="#841584"
              //accessibilityLabel="Learn more about this purple button"
            />
            <Button
            //onPress={onPressLearnMore}
            title="Facebook"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />

            <Button
            //onPress={onPressLearnMore}
            title="LinkedIn"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />
        </View>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../../components/Spacer";

// import { Container } from './styles';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
      </Spacer>
    </View>
  );
}

Signup.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then(response => response.json())
      .then(json => {
        setEmail('');
        setPassword('');
        Alert.alert('Login successful');
        console.log(json);
      })
      .catch(error => {
        throw new Error('Login failed');
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `#00ffff`,
      }}>
      <Text style={{fontSize: 30, fontWeight: `500`, color: `black`}}>
        Login
      </Text>
      <TextInput
        style={{
          borderWidth: 0.2,
          width: `90%`,
          margin: 10,
          backgroundColor: `#fff`,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          borderWidth: 0.2,
          width: `90%`,
          margin: 10,
          backgroundColor: `#fff`,
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default User;

import React, {useState} from 'react';
import {TextInput, Button, Alert, View, Text} from 'react-native';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // const requestBody = {  email, password };
    console.log('start');
    console.log(email);
    console.log(password);
    fetch('https://reqres.in/api/register', {
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
        setName('');
        setEmail('');
        setPassword('');
        Alert.alert('Registration successful');
        console.log(json);
      })
      .catch(error => {
        throw new Error('Registration failed');
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `#00bfff`,
      }}>
      <Text style={{fontSize: 30, fontWeight: `500`, color: `black`}}>
        RegisterForm
      </Text>
      <TextInput
        style={{
          borderWidth: 0.2,
          width: `90%`,
          margin: 10,
          backgroundColor: `#fff`,
        }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="Register" onPress={onSubmit} />
    </View>
  );
};

export default RegisterForm;

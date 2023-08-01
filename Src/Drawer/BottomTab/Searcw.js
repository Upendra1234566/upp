import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Seacrw = () => {
  const [name, setname] = useState(`Puspendra`);
  const [name1, setname1] = useState(`Puspendra1`);
  const [name2, setname2] = useState(`Ram`);
  const [display, setdisplay] = useState(false);

  function dataclear() {
    setname(``);
    setname1(``);
    setname2(``);
    setdisplay(true);
  }

  return (
    <View style={{flex: 1}}>
     
      <TextInput
        style={{borderWidth: 2}}
        placeholder="user name "
        value={name}
        onChangeText={text => setname(text)}
      />

      <TextInput
        style={{borderWidth: 2}}
        placeholder="last name "
        value={name1}
        onChangeText={text => setname1(text)}
      />
      <TextInput
        style={{borderWidth: 2}}
        placeholder="last name "
        value={name2}
        onChangeText={text => setname2(text)}
      />

      <View>
        {display ? (
          <View>
            <Text>input1 {name}</Text>
            <Text>input1 {name1}</Text>
            <Text>input1 {name2}</Text>
          </View>
        ) : null}
      </View>
      

      <Button title="clear input " onPress={() => dataclear(``)} />
    </View>
  );
};

export default Seacrw;

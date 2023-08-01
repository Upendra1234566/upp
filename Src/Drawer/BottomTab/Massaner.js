import React, { useState } from "react";
import { View, Text, Button,TextInput } from "react-native";




const Massaner = ()=>{
    const [name,setname]=useState(`upendra`)
    return(
        <View style={{flex:1, }}>
            <Text>text input {name} </Text>
            <Text>text input:{name} </Text>
            <TextInput
            style={{borderWidth:2}}
            value={name}
             placeholder="user name "
             onChangeText={(text)=>setname(text)}


            />
            <Button title="Clear input value "  onPress={()=>setname(``)}></Button>

            {/* <Button title="popup" onPress={(alert(`wablu `))}  ></Button> */}
        </View>
    )
}


export default Massaner; 
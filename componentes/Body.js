import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

const Body = () => {
    return (
        <View style = {{paddingTop: 20}}>
            <Text style = {{textAlign:'center', fontSize: 20}}>Aqui ainda vou colocar alguma coisa</Text>
            <Text style = {{backgroundColor: '#00ff15', padding: 20, borderRadius:40, margin: 30, fontSize:25, textAlign: 'center'}}>Clique aqui para nos seguir no insta</Text>
        </View>
    );
}

export default Body;
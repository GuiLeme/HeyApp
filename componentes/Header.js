import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

const Header = () => {
    return (
        <View style = {{backgroundColor: '#DEB887', padding: 20}}>
            <Text style = {{textAlign: 'center', fontSize: 30}}>Hey App!</Text>
            <Text style = {{ textAlign: 'center', fontSize: 25}}>O seu Aplicativo para encontrar sua cara metade.</Text>
        </View>
    );
}

export default Header;
import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View>
            <Text></Text>
        <Text style={{fontWeight: 'bold', fontSize:20, textAlign: 'center', color: '#4169E1'}}>AQUI SEMPRE O MELHOR NEGÓCIO</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={{ alignItems:"center", justifyContent: 'center' }}>
        <Image style={{ width: 300, height: 270, }} source={require('Imobiliaria/src/Screens/Imagens/logoimob.png')}></Image>
        </View>

        <View style={styles.estiloBotao}>
            <Button 
            color='#4169E1'
            title="Listagem" 
            onPress={() => navigation.navigate('Listagem')} />
        </View>
        <View style={styles.estiloBotao}>
       
            <Button 
            color='#4169E1'
            title="Cadastro" 
            onPress={() => navigation.navigate('Cadastro')} />
       </View>
        </View>
       
    )

}

const styles = StyleSheet.create({
    estiloBotao: {

      justifyContent: 'center',
      textAlign:'center',
      padding:50,
      
    },

})
import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'

export default class ItemVeiculo extends Component {

    verificarExcluir() {
        if(this.props.excluir) {
            return (
            <View style={{ flex: 1 , borderRadius:20}}>
                <Button 
                color='#4169E1'
                title="Excluir" 
                onPress={() => {this.props.excluir(this.props.id)}}></Button>
            </View>)
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ height: 120, marginRight: 10 }}
                        source={{ uri: this.props.imagem }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Endereço: {this.props.endereco} </Text>
                    <Text>Finalidade: {this.props.finalidade}</Text>
                    <Text>Tipo: {this.props.tipo}</Text>
                    <Text>Valor: {this.props.valor}</Text>
                </View>

                {this.verificarExcluir()}
            </View>
        )
    }
}


import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera'
import ItemVeiculo from '../Components/ItemImovel';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import Database from '../Database/Database';
import Imovel from '../Models/Imovel';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endereco: 'EM BRANCO',
      finalidade: 'EM BRANCO',
      Tipo:'EM BRANCO',
      Valor: 0,
      imagem: '',
    }
   
  }

  CadastrarBanco = (endereco,finalidade, tipo,valor, imagem) => {
    const banco = new Database();
    const imovel = new Imovel(null,endereco,finalidade, tipo,valor, imagem )
    banco.Inserir(imovel);
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({imagem: data.uri})

      CameraRoll.save(data.uri)
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TextInput style={{ fontWeight:'bold',backgroundColor: 'lightgrey', width: 370, textAlign: 'left', padding: 2, margin: 10, color: 'grey', borderRadius:10}}onChangeText={(valor) => { this.setState({ endereco: valor }) }} placeholder='Digite o endereço...' />
          <TextInput style={{ fontWeight:'bold',backgroundColor: 'lightgrey', width: 370, textAlign: 'left', padding: 2, margin: 10, color: 'grey', borderRadius:10}}onChangeText={(valor) => { this.setState({ finalidade: valor }) }} placeholder='Digite a finalidade...' />
          <TextInput style={{ fontWeight:'bold',backgroundColor: 'lightgrey', width: 370, textAlign: 'left', padding: 2, margin: 10, color: 'grey', borderRadius:10}}onChangeText={(valor) => { this.setState({ tipo: valor }) }} placeholder='Digite o tipo imóvel...' />
          <TextInput style={{ fontWeight:'bold',backgroundColor: 'lightgrey', width: 370, textAlign: 'left', padding: 2, margin: 10, color: 'grey', borderRadius:10}}onChangeText={(valor) => { this.setState({ valor: valor }) }} placeholder='Digite o valor...' />
          <Text></Text>
        </View>


        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />

        </View>


        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
   
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
          <Text style={{ fontWeight:'bold',backgroundColor: 'red', width: 150, textAlign: 'center', padding: 10, margin: 5, color: 'white', borderRadius: 50 }}>Tirar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.CadastrarBanco(this.state.endereco, this.state.finalidade, this.state.tipo, this.state.valor,this.state.imagem)}>
            <Text style={{ fontWeight:'bold', backgroundColor: '#4169E1', width: 150, textAlign: 'center', padding: 10, margin: 5, color: 'white', borderRadius: 50 }}>Cadastrar</Text>
          </TouchableOpacity>
          <Text></Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ color: 'black',textAlign: 'center' }}>O Imóvel será cadastrado com os seguintes dados:</Text>

          <ItemVeiculo
            endereco={this.state.endereco}
            finalidade={this.state.finalidade}
            tipo={this.state.tipo}
            valor={this.state.valor}
            imagem={this.state.imagem}
          />

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    flex: 1,
    height: 50,
    
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
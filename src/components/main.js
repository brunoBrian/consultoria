import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import BarraNavegacao from './barraNagegacao';

import Logo from '../images/logo.png';
import MenuCliente from '../images/menu_cliente.png';
import MenuContato from '../images/menu_contato.png';
import MenuEmpresa from '../images/menu_empresa.png';
import MenuServico from '../images/menu_servico.png';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <BarraNavegacao bgColor='#CCC' />
        <View style={styles.Maincontainer}>
          <Image source={Logo} />
          <View style={styles.containerImages}>
            <View style={styles.imagesGroup}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes')}>
                <Image source={MenuCliente} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Contato')}>
                <Image source={MenuContato} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={styles.imagesGroup}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Empresa')}>
                <Image source={MenuEmpresa} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Servico')}>
                <Image source={MenuServico} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  Maincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  containerImages: {
    flexDirection: 'row',
  },
  imagesGroup: {
    alignItems: 'center',
  },
  image: {
    margin: 15
  }
});

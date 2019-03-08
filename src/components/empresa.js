import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import BarraNavegacao from './barraNagegacao';

import DetalheEmpresa from '../images/detalhe_empresa.png';

class Empresa extends Component {
  static navigationOptions = {
    header: null,
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BarraNavegacao bgColor='#EC7148' back={true} navigation={navigation} />
        <View style={styles.containerEmpresaTitle}>
          <Image source={DetalheEmpresa} />
          <Text style={styles.empresaTitle}>A Empresa</Text>
        </View>
        <View style={styles.containerEmpresaGroup}>
          <Text style={styles.descrition}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </View>
    );
  }
}

export default Empresa;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  containerEmpresaTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  empresaTitle: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10
  },
  containerEmpresaGroup: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  descrition: {
    fontSize: 16,
    paddingLeft: 20
  }
});
import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import BarraNavegacao from './barraNagegacao';

import Cliente1 from '../images/cliente1.png';
import Cliente2 from '../images/cliente2.png';
import DetalheCliente from '../images/detalhe_cliente.png';

class Clientes extends Component {
  static navigationOptions = {
    header: null,
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BarraNavegacao bgColor='#B9C941' back={true} navigation={navigation} />
        <View style={styles.containerClientTitle}>
          <Image source={DetalheCliente} />
          <Text style={styles.clientTitle}>Nossos Clientes</Text>
        </View>
        <View style={styles.containerClientGroup}>
          <Image source={Cliente1} />
          <Text style={styles.descrition}>Loren Ipsum doube araysh</Text>
        </View>
        <View style={styles.containerClientGroup}>
          <Image source={Cliente2} />
          <Text style={styles.descrition}>Loren Ipsum doube araysh Loren Ipsum doube araysh Loren Ipsum doube araysh</Text>
        </View>
      </View>
    );
  }
}

export default Clientes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  containerClientTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  clientTitle: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10
  },
  containerClientGroup: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  descrition: {
    fontSize: 16,
    paddingLeft: 20
  }
});
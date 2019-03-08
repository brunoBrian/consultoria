import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import BarraNavegacao from './barraNagegacao';

import DetalheContato from '../images/detalhe_contato.png';

class Contato extends Component {
  static navigationOptions = {
    header: null,
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BarraNavegacao bgColor='#61BD8C' back={true} navigation={navigation} />
        <View style={styles.containerContatoTitle}>
          <Image source={DetalheContato} />
          <Text style={styles.contatoTitle}>Contatos</Text>
        </View>
        <View style={styles.containerContatoGroup}>
          <Text style={styles.descrition}>Telefone: (11) 4545-0473</Text>
          <Text style={styles.descrition}>Celular: (11) 95464-0141</Text>
          <Text style={styles.descrition}>E-mail: bruninho_brian@hotmail.com</Text>
        </View>
      </View>
    );
  }
}

export default Contato;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  containerContatoTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  contatoTitle: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10
  },
  containerContatoGroup: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  descrition: {
    fontSize: 16,
    paddingLeft: 20
  }
});
import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import BarraNavegacao from './barraNagegacao';

import DetalheServico from '../images/detalhe_servico.png';

class Servico extends Component {
  static navigationOptions = {
    header: null,
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <BarraNavegacao bgColor='#19D1C8' back={true} navigation={navigation} />
        <View style={styles.containerServicoTitle}>
          <Image source={DetalheServico} />
          <Text style={styles.servicoTitle}>Nossos Serviços</Text>
        </View>
        <View style={styles.containerServicoGroup}>
          <Text style={styles.descrition}>- Consultoria</Text>
          <Text style={styles.descrition}>- Processos</Text>
          <Text style={styles.descrition}>- Acompanhamento de Processos</Text>
        </View>
      </View>
    );
  }
}

export default Servico;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  containerServicoTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  servicoTitle: {
    fontSize: 30,
    color: '#19D1C8',
    marginLeft: 10
  },
  containerServicoGroup: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  descrition: {
    fontSize: 16,
    paddingLeft: 20
  }
});
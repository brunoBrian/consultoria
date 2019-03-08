import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Back from './backPage';

class BarraNavegacao extends Component {
  render() {
    const {bgColor, back=false, navigation} = this.props;
    return (
      <View>
        <StatusBar backgroundColor={bgColor} />
        <View style={[styles.containerNavegation, {backgroundColor: bgColor}]}>
          {back &&
            <Back navigation={navigation} />
          }
          <Text style={styles.navegationTitle}>ATM Consultoria</Text>
        </View>
      </View>
    );
  }
}

export default BarraNavegacao;

const styles = StyleSheet.create({
  containerNavegation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // backgroundColor: props.bgColor,
    paddingHorizontal: 10
  },
  navegationTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
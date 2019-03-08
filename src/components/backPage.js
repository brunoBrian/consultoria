
import React, {Component} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

import Voltar from '../images/btn_voltar.png';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image source={Voltar} />
      </TouchableOpacity>
    );
  }
}

export default Main;
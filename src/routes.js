import { createStackNavigator } from 'react-navigation';

import Main from './components/main';
import Clientes from './components/clientes';
import Contato from './components/contato';
import Empresa from './components/empresa';
import Servico from './components/servico';

export default createStackNavigator({
  Main,
  Clientes,
  Contato, 
  Empresa,
  Servico
});
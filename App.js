import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicio from './src/app/TelaInicio';
import Vinhos from './src/app/Vinhos';
import Carrinho from './src/app/Carrinho';
import Pagamento from './src/app/Pagamento';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicio">
        <Stack.Screen name="TelaInicio" component={TelaInicio} />
        <Stack.Screen name="Vinhos" component={Vinhos} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
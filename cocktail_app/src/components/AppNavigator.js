import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../views/Home/Home';
import TabNavigator from '../components/TabNavigator';
import SignIn from '../views/SignIn/SignIn';
import CocktailsView from '../views/CocktailView/CocktailView';

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Tabnav"
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Liste de cocktails" component={CocktailsView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Home from '../views/Home/Home'
import TabNavigator from '../components/TabNavigator'
import SignIn from '../views/SignIn/SignIn'
import Cocktails from './Cocktails/Cocktails'
import ReadMe from '../views/ReadMe/ReadMe'

const AppNavigator = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        options={{headerShown: false}}
        name="Cocktails"
        component={Cocktails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ReadMe"
        component={ReadMe}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

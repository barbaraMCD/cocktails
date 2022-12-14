import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../views/Home/Home';
import TabNavigator from '../components/TabNavigator';
import SignIn from '../views/SignIn/SignIn';
import GinView from '../views/CocktailView/GinView';
import VodkaView from '../views/CocktailView/VodkaView';
import RhumView from '../views/CocktailView/RhumView';
import WhiskyView from '../views/CocktailView/WhiskyView';
import TequilaView from '../views/CocktailView/TequilaView';
import CointreauView from '../views/CocktailView/CointreauView';
import Recipe from '../views/Recipe/Recipe';
import ReadMe from '../views/ReadMe/ReadMe';
import Cocktails from './Cocktails/Cocktails';
import WishList from '../views/WishList/WishList';

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
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Cocktails"
        component={Cocktails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ReadMe"
        component={ReadMe}
      />
      <Stack.Screen name="GinView" component={GinView} />
      <Stack.Screen name="VodkaView" component={VodkaView} />
      <Stack.Screen name="WhiskyView" component={WhiskyView} />
      <Stack.Screen name="TequilaView" component={TequilaView} />
      <Stack.Screen name="CointreauView" component={CointreauView} />
      <Stack.Screen name="RhumView" component={RhumView} />
      <Stack.Screen name="WishLish" component={WishList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

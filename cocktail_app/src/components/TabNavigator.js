import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../views/Home/Home';
import Recipe from '../views/Recipe/Recipe';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipe" component={Recipe} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

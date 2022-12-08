import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import Home from '../views/Home/Home'
import ReadMe from '../views/ReadMe/ReadMe'

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ReadMe" component={ReadMe} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

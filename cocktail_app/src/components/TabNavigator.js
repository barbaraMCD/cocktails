import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../views/Home/Home';
import Recipe from '../views/Recipe/Recipe';
import ReadMe from '../views/ReadMe/ReadMe';
import WishList from '../views/WishList/WishList';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipe" component={Recipe} />
      <Tab.Screen name="ReadMe" component={ReadMe} />
      <Tab.Screen name="wishList" component={WishList} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

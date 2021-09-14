import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListCards from '../../components/listcards/ListCards';
import { Icon } from 'react-native-elements'
import MenuPage from '../menupage/MenuPage';
import Inicio from '../inicio/Inicio';



const Tab = createBottomTabNavigator();

export default function NavigationTabs () {


    return (
        <Tab.Navigator >
            <Tab.Screen options={{title:'Inicio', headerShown: false, 
            tabBarIcon: ({ color, size }) => (<Icon
                raised
                name='home'
                type='foundation'
                size={15}
              />)}}
             name="Home" component={Inicio} />
              <Tab.Screen options={{title:'Favorite',headerShown: false, 
            tabBarIcon: ({ color, size }) => (<Icon 
                raised
                name='heart'
                type='foundation'
                size={15}
              />)}}
             name="favorite" component={ListCards} />
                <Tab.Screen options={{title:'cart',headerShown: false,  
            tabBarIcon: ({ color, size }) => (<Icon 
                raised
                name='shopping-cart'
                type='foundation'
                size={15}
              />)}}
             name="cart" component={ListCards} />
             <Tab.Screen options={{title:'menu', headerShown: false, 
            tabBarIcon: ({ color, size }) => (<Icon
                raised
                name='thumbnails'
                type='foundation'
                solid
                size={15}
              />)}}
             name="menu" component={MenuPage} />
             
        </Tab.Navigator>
    );

}
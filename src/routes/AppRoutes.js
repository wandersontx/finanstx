import React from 'react';
import { createDrawerNavigator, createStackNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#171717',
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold',
            },
            activeTintColor: '#fff',
            activeBackgroundColor: '#00b94a',
            inactiveBackgroundColor: '#000',
            inactiveTintColor: '#ddd',
            itemStyle: {
                marginVertical: 5,
            }
        }}
        >
            <AppDrawer.Screen name="Home" component={Home} options={{headerShown:false}} />
            <AppDrawer.Screen name="Profile" component={Profile} options={{headerShown:false}} />
            <AppDrawer.Screen name="New" component={New} options={{headerShown:false}} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;
import React from 'react';
import Feed from './src/Feed';
import Screen1 from './src/Screens/Drawer/Screen1';
import Screen2 from './src/Screens/Drawer/Screen2';
import Screen3 from './src/Screens/Drawer/Screen3';
import Tab1 from './src/Screens/Tabs/Tab1';
import Tab2 from './src/Screens/Tabs/Tab2';
import Tab3 from './src/Screens/Tabs/Tab3';
import Detail from './src/Detail';

import {NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


export default function App() {

  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

      createHomeStack = () =>
        <Stack.Navigator>
          <Stack.Screen name="Feed"
          component={Feed}
          options={{
            title: "My Feed"
          }}
          />
          <Stack.Screen name="Detail"
          component={Detail}
          options={{
            title: "Detail Screen"
          }}
          />
          <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
          <Stack.Screen name="Top Tabs" children={createTopTabs} />
        </Stack.Navigator>

      createTopTabs = (props) => {
        return <MaterialTopTabs.Navigator>
          <MaterialTopTabs.Screen
          name="Tab1"
          component={Tab1}
          options={{title: props.route.params.name}}
          />
          <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
          <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
        </MaterialTopTabs.Navigator>
      }

      createBottomTabs = () => {
        return <MaterialBottomTabs.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#65509f' }}
        >
          <MaterialBottomTabs.Screen
          name="Tab1"
          component={Tab1}
          />
          <MaterialBottomTabs.Screen name="Tab2" component={Tab2} />
          <MaterialBottomTabs.Screen name="Tab3" component={Tab3} />
        </MaterialBottomTabs.Navigator>
      }
    return (
      <AppearanceProvider>
        <NavigationContainer theme={MyTheme}>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" children={createHomeStack}/>
            <Drawer.Screen name="Contacts" component={Screen1}/>
            <Drawer.Screen name="Favorites" component={Screen2}/>
            <Drawer.Screen name="Settings" component={Screen3}/>

          </Drawer.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    );
}

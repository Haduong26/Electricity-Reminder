import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import User from './components/User';
import { FontAwesome } from '@expo/vector-icons';
import Devices from './components/Devices';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconSize = 24;

const navigatorRoutes = [
    { name: "Home", component: Home, icon: <FontAwesome name='home' size={iconSize} /> },
    { name: "User", component: User, icon: <FontAwesome name='user' size={iconSize} /> },
]

const pageRoutes = [
    { name: "Devices", component: Devices },
]

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            {navigatorRoutes.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => item.icon,
                        }}
                    />
                )
            })
            }
            {pageRoutes.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarButton: () => { },
                            headerShown: false,
                        }}
                    />
                )
            })
            }
        </Tab.Navigator>
    );
}

function AppLayout() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="App"
                component={TabNavigator}
                options={{
                    header: () => <Header />, // Add your custom header component
                }}
            />
        </Stack.Navigator>
    );
}

export default AppLayout;

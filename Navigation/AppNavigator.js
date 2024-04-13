import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from '../Screens/FirstScreen';
import GameScreen from '../Screens/SecondScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? '#000' : 'blue',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#FFF' : ''
                    }
                }}
            >
                <Stack.Screen
                    name="ScreenOne"
                    component={FirstScreen}
                    options={{
                        title: 'Main Screen',
                    }}
                />
                <Stack.Screen
                    name="ScreenTwo"
                    component={GameScreen}
                    options={{
                        title: 'Game Screen',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
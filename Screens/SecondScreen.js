import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import entities from '../entities/index';
import Physics from '../Physics';
const GameScreen = (props) => {
    return (
        <View>
            <Text>Game Screen</Text>
            <Text>Click on the button to navigate to the next screen</Text>
            <Button
                title="Go to Main Screen"
                onPress={() => props.navigation.navigate('ScreenOne')}
            />
            <GameEngine
                systems={[Physics]}
                entities={entities()}
            >
                <StatusBar style="auto" hidden={true} />
            </GameEngine>
        </View>
    );
}
export default GameScreen;
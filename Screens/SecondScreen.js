import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Button, Alert, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import entities from '../entities/index';
import Physics from '../Physics';

const GameScreen = (props) => {
    const [gameEntities, setGameEntities] = useState(null);

    useEffect(() => {
        try {
            const initialEntities = entities();
            setGameEntities(initialEntities);
        } catch (error) {
            console.error('Failed to initialize entities:', error);
        }
    }, []);

    if (!gameEntities) {
        return <Text>Loading...</Text>;
    }

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
                entities={gameEntities}
            >
                <StatusBar style="auto" hidden={true} />
            </GameEngine>
        </View>
    );
}

export default GameScreen;
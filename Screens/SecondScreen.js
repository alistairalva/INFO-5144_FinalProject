import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

import { useShapes } from '../entities/index'; // Import the custom hook
import Physics from '../Physics';

const GameScreen = (props) => {
    const gameEntities = useShapes(); // Call the custom hook

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
                entities={gameEntities} // Pass the entities to the GameEngine
            >
                <StatusBar style="auto" hidden={true} />
            </GameEngine>
        </View>
    );
}

export default GameScreen;
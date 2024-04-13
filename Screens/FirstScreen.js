import React, {useEffect, useState } from 'react';

import { View, Text, Button, Alert } from 'react-native';

const FirstScreen = (props) => {

    return (
        <View>
            <Text>First Screen</Text>
            <Text>Click on the button to navigate to the next screen</Text>
            <Button
                title="Go to Second Screen"
                onPress={() => props.navigation.navigate('ScreenTwo')}
            />
        </View>
    );
}

export default FirstScreen;
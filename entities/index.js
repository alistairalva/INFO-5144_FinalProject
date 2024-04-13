import Matter from 'matter-js';
import { Dimensions } from 'react-native';

import Physics from '../Physics';
import Box from '../components/Box';
import Circle from '../components/Circle';
import Triangle from "../components/Triangle";
import Rectangle from "../components/Rectangle";
import EllipseComponent from "../components/Ellipse";
import Pentagon from "../components/Pentagon";
import Hexagon from "../components/Hexagon";

export default (gameworld) => {
    let engine = Matter.Engine.create();
    let world = engine.world;
    let { width, height } = Dimensions.get('window');

    return {
        physics: { engine, world },

        Square: Box(
            world,
            'red',
            { x: width / 2, y: -20 },
            { width: 40, height: 40 },
            { isStatic: false, label: 'Box'}
        ),
        Circle: Circle(
            world,
            'blue',
            { x: (width / 2 - 20), y: -20 },
            20,
            { isStatic: false, label: 'Circle'}
        ),
        Triangle: Triangle(
            world,
            'green',
            { x: (width / 2 + 20), y: -20 },
            {width: 50, height: 50},
            { isStatic: false, label: 'Triangle'}
        ),
        Rectangle: Rectangle(
            world,
            'purple',
            { x: (width / 2 - 20), y: -20 },
            { width: 60, height: 40 },
            { isStatic: false, label: 'Rectangle'}
        ),
        Ellipse: EllipseComponent(
            world,
            'orange',
            { x: (width / 2 + 60), y: -20 },
            { width: 60, height: 40 },
            { isStatic: false, label: 'Ellipse'}
        ),
        Pentagon: Pentagon(
            world,
            'pink',
            { x: (width / 2 - 60), y: -20 },
            { width: 40, height: 40 },
            { isStatic: false, label: 'Pentagon'}
        ),
        Hexagon: Hexagon(
            world,
            'yellow',
            { x: (width / 2 + 20), y: -40 },
            { width: 60, height: 40 },
            { isStatic: false, label: 'Hexagon'}
        ),
    };
    
};
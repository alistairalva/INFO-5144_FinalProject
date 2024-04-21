import React, { useEffect, useState } from 'react';
import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addShape } from '../actions';

import Box from '../components/Box';
import Circle from '../components/Circle';
import Triangle from "../components/Triangle";
import Rectangle from '../components/Rectangle';
import EllipseComponent from "../components/Ellipse";
import Pentagon from "../components/Pentagon";
import Hexagon from "../components/Hexagon";

export const useShapes = () => {
    let engine = Matter.Engine.create();
    let world = engine.world;
    let { width, height } = Dimensions.get('window');

    const shapes = useSelector(state => state.shapes);
    
    const createRandomShape = () => {

        // Choose a random shape component
        const randomShapeIndex = Math.floor(Math.random() * 7);
        let shape;
        switch (randomShapeIndex) {
            case 0:
                shape = Box(world, 'red', { x: Math.random() * width, y: 120 }, { width: 40, height: 40 });
                console.log('Square created in memory!');
                break;
            case 1:
                shape = Circle(world, 'blue', { x: Math.random() * width, y: 120 }, 20);
                console.log('Circle created in memory!');
                break;
            case 2:
                shape = Triangle(world, 'green', { x: Math.random() * width, y: 120 }, { width: 50, height: 50 });
                console.log('Triangle created in memory!');
                break;
            case 3:
                shape = Rectangle(world, 'purple', { x: Math.random() * width, y: 120 }, { width: 60, height: 40 });
                console.log('Rectangle created in memory!');
                break;
            case 4:
                shape = EllipseComponent(world, 'orange', { x: Math.random() * width, y: 120 }, { width: 60, height: 40 });
                console.log('Ellipse created in memory!');
                break;
            case 5:
                shape = Pentagon(world, 'pink', { x: Math.random() * width, y: 120 }, { width: 40, height: 40 });
                console.log('Pentagon created in memory!');
                break;
            case 6:
                shape = Hexagon(world, 'yellow', { x: Math.random() * width, y: 140 }, { width: 60, height: 40 });
                console.log('Hexagon created in memory!');
                break;
            default:
                break;
        }
        return shape;
    };

    const dispatch = useDispatch();

    useEffect(() => {
        let shapeId = 0;
        const intervalId = setInterval(() => {
            const newShape = createRandomShape();
            dispatch(addShape(`shape${shapeId++}`, newShape ));
            console.log(newShape.body.label + " added to redux store!");
        }, 1000);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    return {
        physics: { engine, world },
        ...shapes, // Store the shapes object from the redux
    };
};

export default (gameworld) => {
    const entities = useShapes();
    return entities;
};

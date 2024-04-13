import Matter from 'matter-js';
import React from 'react';
import { View, Image, Text } from 'react-native';

const Circle = (props) => {
    const width = props.radius * 2;

    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - width / 2;

    return (
        <View
            style={{
                borderWidth: 2,
                position: "absolute",
                left: x,
                top: y,
                width: width,
                height: width,
                borderRadius: props.radius,
                backgroundColor: props.color,
            }}
        />
    );
};
export default (world, color, pos, radius, options = {}) => {
    const circle = Matter.Bodies.circle(
        pos.x,
        pos.y,
        radius,
        {
            label: "Circle",
            isStatic: options.isStatic || false,
            frictionAir: 0,
            friction: 1,
            density: 0.001,
        });

    Matter.World.add(world, circle);
    return { body: circle, color, radius, renderer: <Circle /> };
};

import React from 'react';
import { Svg, Rect } from 'react-native-svg';
import Matter from 'matter-js';

const Rectangle = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    return (
        <Svg height={height} width={width} style={{ position: 'absolute', top: y, left: x }}>
            <Rect width={width} height={height} fill={props.color} stroke="black" strokeWidth="2" />
        </Svg>
    );
};

export default (world, color, pos, size, options = {}) => {
    const rectangle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: 'Rectangle', frictionAir: 0, friction: 1, isStatic: false, density: 0.001 }

    );
    Matter.World.add(world, rectangle);
    return { body: rectangle, color, size, renderer: <Rectangle body={rectangle} color={color} size={size} /> };
};
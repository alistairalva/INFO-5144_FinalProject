import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import Matter from 'matter-js';

const Hexagon = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    const points = `${width / 4},0 ${3 * width / 4},0 ${width},${height / 2} ${3 * width / 4},${height} ${width / 4},${height} 0,${height / 2}`;

    return (
        <Svg height={height} width={width} style={{ position: 'absolute', top: y, left: x }}>
            <Polygon points={points} fill={props.color} stroke="black" strokeWidth="2" />
        </Svg>
    );
};

export default (world, color, pos, size, options = {}) => {
    const hexagon = Matter.Bodies.polygon(
        pos.x, 
        pos.y, 6, 
        size.width / 2, 
        {
            label: "Hexagon",
            isStatic: options.isStatic || false,
            frictionAir: 0,
            friction: 1,
            density: 0.001,
        });
    Matter.World.add(world, hexagon);
    return { body: hexagon, color, size, renderer: <Hexagon body={hexagon} color={color} size={size} /> };
};
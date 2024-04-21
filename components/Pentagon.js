import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import Matter from 'matter-js';

const Pentagon = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    const points = `${width / 2},0 ${width},${height / 3} ${3 * width / 4},${height} ${width / 4},${height} 0,${height / 3}`;

    return (
        <Svg height={height} width={width} style={{ position: 'absolute', top: y, left: x }}>
            <Polygon points={points} fill={props.color} stroke="black" strokeWidth="2" />
        </Svg>
    );
};

export default (world, color, pos, size, options = {}) => {
    const pentagon = Matter.Bodies.polygon(
        pos.x, 
        pos.y, 5, 
        size.width / 2, 
        {
            label: "Pentagon",
            isStatic: options.isStatic || false,
            frictionAir: 0,
            friction: 1,
            density: 0.001,
        });
    Matter.World.add(world, pentagon);
    console.log('Pentagon initialized:');
    return { body: pentagon, color, size, renderer: <Pentagon body={pentagon} color={color} size={size} /> };
};
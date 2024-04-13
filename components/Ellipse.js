import React from 'react';
import { Svg, Ellipse } from 'react-native-svg';
import Matter from 'matter-js';

const EllipseComponent = (props) => {
    const width = props.size.width;
    const height = props.size.height;
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    return (
        <Svg height={height} width={width} style={{ position: 'absolute', top: y, left: x }}>
            <Ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill={props.color} stroke="black" strokeWidth="2" />
        </Svg>
    );
};

export default (world, color, pos, size, options = {}) => {
    const circle = Matter.Bodies.circle(
        pos.x, 
        pos.y, 
        Math.max(size.width, size.height) / 2, 
        {
            label: "Ellipse",
            isStatic: options.isStatic || false,
            frictionAir: 0,
            friction: 1,
            density: 0.001,
        });
    Matter.World.add(world, circle);
    return { body: circle, color, size, renderer: <EllipseComponent body={circle} color={color} size={size} /> };
};
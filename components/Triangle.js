import React from 'react';
import { Svg, Path } from 'react-native-svg';
import Matter from 'matter-js';

const Triangle = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;

    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    const path = `M0,0 L${width},0 L${width / 2},${height} Z`;

    return (
        <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute', top: y, left: x }}>
            <Path d={path} fill={props.color} stroke="black" strokeWidth="2" />
        </Svg>
    );
};

export default (world, color, pos, size, options = {}) => {
    const triangle = Matter.Bodies.fromVertices(
        pos.x,
        pos.y,
        [
            Matter.Vector.create(0, 0),
            Matter.Vector.create(size.width, 0),
            Matter.Vector.create(size.width / 2, size.height),
        ],
        {
            label: "Triangle",
            isStatic: options.isStatic || false,
            frictionAir: 0,
            friction: 1,
            density: 0.001,
        }
    );

    Matter.World.add(world, triangle);
    console.log('Triangle initialized:');
    return { body: triangle, color, size, renderer: Triangle };
};
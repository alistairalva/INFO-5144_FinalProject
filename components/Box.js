import { View } from 'react-native';
import Matter from 'matter-js';

const Box = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;

    const xPos = props.body.position.x - width / 2;
    const yPos = props.body.position.y - height / 2;

    return (
        <View
            style={{
                borderWidth: 2,
                width: width,
                height: height,
                left: xPos,
                top: yPos,
                backgroundColor: props.color,
                position: 'absolute',
            }}
        ></View>
    );
};

export default (world, color, pos, size) => {
    const theBox = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: 'Square', frictionAir: 0, friction: 1, isStatic: false, density: 0.001 }

    );
    Matter.World.add(world, theBox);
    console.log('Square initialized:');
    return { body: theBox, color, pos, renderer: Box };
};
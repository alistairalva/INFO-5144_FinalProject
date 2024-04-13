import Matter from 'matter-js';
import Box from '../components/Box';
import Circle from '../components/Circle';
import Triangle from "../components/Triangle";
import Rectangle from "../components/Rectangle";
import EllipseComponent from "../components/Ellipse";
import Pentagon from "../components/Pentagon";
import Hexagon from "../components/Hexagon";

export const addShape = (entities, world, width) => {
    try {
        const shapes = [
            { name: 'Box', component: Box },
            { name: 'Circle', component: Circle },
            { name: 'Triangle', component: Triangle },
            { name: 'Rectangle', component: Rectangle },
            { name: 'Ellipse', component: EllipseComponent },
            { name: 'Pentagon', component: Pentagon },
            { name: 'Hexagon', component: Hexagon },
        ];
        const colors = ["green", "red", "blue", "purple", "orange", "yellow", "pink"];

        const randomIndex = Math.floor(Math.random() * shapes.length);
        const shapeInfo = shapes[randomIndex];
        const color = colors[randomIndex];
        const x = Math.random() * width;
        const size = shapeInfo.name === 'Circle' ? 20 : { width: 60, height: 40 }; // Pass the radius for the Circle

        const shape = shapeInfo.component(
            world,
            color,
            { x, y: -20 },
            size,
            { isStatic: false }
        );

        entities[shape.body.label + Date.now()] = shape;
        console.log('Shape added: ', shape.body.label);
    } catch (error) {
        console.log(`Error adding shape: ${shapeInfo.name}, ${error}`);
    }
};
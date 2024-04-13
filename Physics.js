import Matter from 'matter-js';
import Box from './components/Box';
import Circle from './components/Circle';
import Triangle from "./components/Triangle";
import Rectangle from "./components/Rectangle";
import EllipseComponent from "./components/Ellipse";
import Pentagon from "./components/Pentagon";
import Hexagon from "./components/Hexagon";

const Physics = (entities, { touches, dispatch, events, time }) => {
    let engine = entities.physics.engine;
    let world = engine.world;

    engine.world.gravity.y = 0.5;

    // const shapes = [Box, Circle, Triangle, Rectangle, EllipseComponent, Pentagon, Hexagon];
    // const colors = ["green", "red", "blue", "purple", "orange", "yellow", "pink"];

    // setInterval(() => {
    //     const randomIndex = Math.floor(Math.random() * shapes.length);
    //     const Shape = shapes[randomIndex];
    //     const color = colors[randomIndex];
    //     const x = Math.random() * width;
    //     const size = { width: 60, height: 40 };

    //     const shape = Shape(
    //         world,
    //         color,
    //         { x, y: -20 },
    //         size,
    //         { isStatic: false, label: Shape.name }
    //     );

    //     entities[Shape.name + Date.now()] = shape;
    // }, 1000);

    // Object.values(entities).forEach(entity => {
    //     if (entity.body && entity.body.velocity.y === 0) {
    //         Matter.Body.setVelocity(entity.body, {
    //             x: 0,
    //             y: 2,
    //         });
    //         const direction = Math.random() < 0.5 ? -1 : 1; // Decide the direction randomly
    //         Matter.Body.setAngularVelocity(entity.body, 0.05 * direction); // Apply angular velocity
    //     }
    // });

    // Matter.Engine.update(engine, time.delta);

    return entities;
};

export default Physics;
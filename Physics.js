import Matter, { Sleeping } from "matter-js";

const Physics = (entities, { touches, dispatch, events, time }) => {
    let engine = entities.physics.engine;
    let world = engine.world;

    engine.world.gravity.y = 0.5;

    Matter.Engine.update(engine, time.delta);
    return entities;
};
export default Physics;

import Matter from "matter-js";

const Physics = (entities, { touches, time, events, dispatch }) => {
    let engine = entities.physics.engine;

    engine.world.gravity.y = 0.1;

    touches
        .filter((t) => t.type === 'press')
        .forEach(() => {
            Object.values(entities).forEach(entity => {
                if (entity.body) {
                    Matter.Body.setVelocity(entity.body, {
                        x: 0,
                        y: -5,
                    });
                }
            });
        });

    Matter.Engine.update(engine, time.delta);
    return entities;
};

export default Physics;
var engine = Matter.Engine.create();
var render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: 600,
    width: 700,
    wireframes: false
  }
});
var rec1 = Matter.Bodies.rectangle(10, 130, 800, 20, {
  isStatic: true,
  angle: 0.29
});
var rec = Matter.Bodies.rectangle(590, 280, 800, 20, {
  isStatic: true,
  angle: -10
});
var car = Matter.Composites.car(20, 110, 120, 40, 30, { friction: 0.1 });
var rec2 = Matter.Bodies.rectangle(700, 300, 50, 900, { isStatic: true });
var rec3 = Matter.Bodies.rectangle(300, 0, 900, 50, { isStatic: true });
var rec4 = Matter.Bodies.rectangle(300, 600, 900, 50, { isStatic: true });
var stack = Matter.Composites.stack(70, 400, 5, 10, 0, 0, function(x, y) {
  return Matter.Bodies.rectangle(x, y, 20, 20);
});
var mouse = Matter.Mouse.create(render.canvas),
  mouseconstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { stiffness: 0.01, render: { visible: false } }
  });
Matter.World.add(engine.world, [mouseconstraint,rec2, rec3, rec4, rec, rec1, car, stack]);
Matter.Engine.run(engine);
Matter.Render.run(render);

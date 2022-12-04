import {
    InstancedMesh,
    Mesh, PhysicsImpostor
} from "@babylonjs/core";

export function createCube(template: Mesh): InstancedMesh {
  const cube = template.createInstance("box");
  cube.physicsImpostor = new PhysicsImpostor(
    cube,
    PhysicsImpostor.BoxImpostor,
    { mass: 1, friction: 2.5 }
  );
  return cube;
}

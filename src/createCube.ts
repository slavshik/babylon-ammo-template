import {
  Color3,
  MeshBuilder,
  PhysicsImpostor,
  StandardMaterial,
} from "@babylonjs/core";
import { scene } from "./scene";

export function createCube() {
  const cube = MeshBuilder.CreateBox("box", { size: 0.5 }, scene);
  cube.position.set(0, 5, 0);
  const cubeMaterial = new StandardMaterial("material", scene);
  cubeMaterial.diffuseColor = Color3.Random();
  // cubeMaterial.wireframe = true;
  cube.material = cubeMaterial;
  cube.physicsImpostor = new PhysicsImpostor(
    cube,
    PhysicsImpostor.BoxImpostor,
    { mass: 1, friction: 0.2, restitution: 0.6 }
  );
  return cube;
}

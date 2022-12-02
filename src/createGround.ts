import {
  Color3,
  MeshBuilder,
  PhysicsImpostor,
  StandardMaterial,
} from "@babylonjs/core";
import { scene } from "./scene";

export function createGround(size = 100) {
  const ground = MeshBuilder.CreateBox(
    "ground",
    { width: size, height: 0.1, depth: size },
    scene
  );
  const groundMaterial = new StandardMaterial("material", scene);
  groundMaterial.diffuseColor = Color3.FromHexString("#D9D9D9");
  ground.material = groundMaterial;
  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.2, friction: 0.5 }
  );
  ground.receiveShadows = true;
  return ground;
}

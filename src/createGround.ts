import {
  Color3,
  MeshBuilder,
  PhysicsImpostor,
  StandardMaterial,
} from "@babylonjs/core";
import { scene } from "./scene";

export function createGround(size = 200) {
  const ground = MeshBuilder.CreateBox(
    "ground",
    { width: size, height: 0.1, depth: size },
    scene
  );
  const groundMaterial = new StandardMaterial("material", scene);
  groundMaterial.diffuseColor = Color3.FromHexString("#00ff00");
  ground.material = groundMaterial;
  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    { mass: 0, friction: 2 }
  );
  ground.receiveShadows = true;
  return ground;
}

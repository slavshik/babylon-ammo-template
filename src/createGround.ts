import {
  Color3,
  MeshBuilder,
  PhysicsImpostor,
  StandardMaterial,
} from "@babylonjs/core";
import { scene } from "./scene";

export function createGround(size = 20) {
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: size, height: size },
    scene
  );
  const groundMaterial = new StandardMaterial("material", scene);
  groundMaterial.diffuseColor = Color3.FromHexString("#D9D9D9");
  ground.material = groundMaterial;
  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.PlaneImpostor,
    { mass: 0, restitution: 0.2, friction: 0.5 }
  );
  ground.receiveShadows = true;
  return ground;
}

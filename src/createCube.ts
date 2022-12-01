import { MeshBuilder, PhysicsImpostor, StandardMaterial } from "@babylonjs/core";
import { scene } from "./scene";

export function createCube() {
    const cube = MeshBuilder.CreateBox("box", {}, scene);
    cube.position.set(0, 5, 0);
    const cubeMaterial = new StandardMaterial("material", scene);
    // cubeMaterial.wireframe = true;
    cube.material = cubeMaterial;
    cube.physicsImpostor = new PhysicsImpostor(cube, PhysicsImpostor.BoxImpostor, {mass:1, restitution: 0.9});
    return cube;
}
import { AmmoJSPlugin, Color4, Mesh, SceneLoader, Vector3 } from "@babylonjs/core";
import Ammo from "ammojs-typed";
import "regenerator-runtime/runtime";
import { camera } from "./camera";
import { createCube } from "./createCube";
import { createGround } from "./createGround";
import { engine } from "./engine";
import "./index.less";
import { light } from "./lights";
import { scene } from "./scene";

scene.addCamera(camera);
scene.addLight(light);

const rand = (value: number) => Math.random() * value;
scene.clearColor = new Color4(0, 0, 0, 1);
const createNewCube = (template: Mesh) => {
  const cube = createCube(template);
  cube.position.set(0, 15, 0);
  cube.addRotation(rand(360), rand(360), rand(360));
  scene.addMesh(cube);
  return cube;
};
async function main(): Promise<void> {
  const value = await SceneLoader.ImportMeshAsync("Cube", "./assets/", "Dice.babylon", scene);
  const [mesh] = value.meshes;
  scene.removeMesh(mesh);
  const ammo = await Ammo();
  const physics = new AmmoJSPlugin(true, ammo);
  scene.enablePhysics(new Vector3(0, -9.81, 0), physics);
  const ground = createGround();
  scene.addMesh(ground);
  const createMoreCube = () => {
    createNewCube(mesh as Mesh);
    setTimeout(createMoreCube, 1000);
  };
  createMoreCube();
  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", () => engine.resize());
  engine.resize();
}
main();

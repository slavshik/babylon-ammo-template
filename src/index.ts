import "./index.less";
import { AmmoJSPlugin, Color4, Vector3 } from "@babylonjs/core";
import Ammo from "ammojs-typed";
import "regenerator-runtime/runtime";
import { camera } from "./camera";
import { engine } from "./engine";
import { light } from "./lights";
import { scene } from "./scene";
import { createCube } from "./createCube";
import { createGround } from "./createGround";

scene.addCamera(camera);
scene.addLight(light);

scene.clearColor = new Color4(0, 0, 0, 1);

async function main(): Promise<void> {
  const ammo = await Ammo();
  const physics = new AmmoJSPlugin(true, ammo);
  scene.enablePhysics(new Vector3(0, -9.81, 0), physics);
  const cube = createCube();
  cube.rotation.x = Math.random();
  cube.rotation.y = Math.random();
  cube.rotation.z = Math.random();
  const ground = createGround();
  scene.addMesh(ground);
  scene.addMesh(cube);
  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", () => engine.resize());
  engine.resize();
}
main();

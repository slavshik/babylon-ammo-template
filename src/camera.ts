import { ArcRotateCamera, Vector3 } from "@babylonjs/core";
import { canvas } from "./engine";
import { scene } from "./scene";

const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 4,
    Math.PI / 3,
    20,
    Vector3.Zero(),
    scene
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
export { camera };

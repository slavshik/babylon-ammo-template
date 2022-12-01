import { Color3, DirectionalLight, HemisphericLight, TransformNode, Vector3 } from "@babylonjs/core";
import { scene } from "./scene";

const ambientLight = new HemisphericLight(
    "HemiLight",
    new Vector3(0, 10, 0),
    scene
  );
  ambientLight.groundColor = Color3.FromHexString("#D9D9D9");
  ambientLight.intensity = 0.392;
  const light = new DirectionalLight("sceneLight", Vector3.Forward(), scene);
  light.intensity = 0.4;
  light.diffuse = Color3.FromHexString("#ffffff");
  const lightNode = new TransformNode("light-node", scene);
  lightNode.position.set(5.96, 10.18, -3.51);
  light.parent = lightNode;
export { ambientLight, light, lightNode };
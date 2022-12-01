import { Engine } from "@babylonjs/core";

const canvas = document.getElementById("viewport") as HTMLCanvasElement;
const engine = new Engine(canvas, true, {}, true);

export { engine, canvas };
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector3,
  WebXRHitTest,
} from "@babylonjs/core";
import "@babylonjs/loaders";

const canvasId = "renderCanvas";
let canvas = document.getElementById(canvasId);

if (!canvas) {
  throw new Error(`An element with the id "${canvasId}" was not found`);
}

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error(`The element with is ${canvasId} is not a canvas element`);
}

const engine = new Engine(canvas, true);

const createScene = async () => {
  const scene = new Scene(engine);

  // Camera setup
  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 3,
    10,
    new Vector3(0, 1, 0),
    scene
  );
  camera.attachControl(canvas, true);

  // Lighting
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Example artifact (Sphere representing an exhibit piece)
  const artifact = MeshBuilder.CreateSphere("artifact", { diameter: 1 }, scene);

  artifact.position = new Vector3(0, 1, 0);
  artifact.rotate(new Vector3(1, 0, 0), 3.14);

  const artifactMaterial = new StandardMaterial("artifactMaterial", scene);

  artifactMaterial.diffuseTexture = new Texture(
    "https://assets.babylonjs.com/textures/earth.jpg",
    scene
  );
  artifact.material = artifactMaterial;

  // XR Support
  const xr = await scene.createDefaultXRExperienceAsync({
    uiOptions: {
      sessionMode: "immersive-ar",
    },
    optionalFeatures: true,
  });

  xr.baseExperience.featuresManager.enableFeature(WebXRHitTest, "latest");

  return scene;
};

const initalizeScene = async () => {
  const scene = await createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });
};

initalizeScene();

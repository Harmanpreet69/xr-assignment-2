import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Color3,
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

  // Floor
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 10, height: 10 },
    scene
  );
  const groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.diffuseColor = new Color3(0.8, 0.8, 0.8);
  ground.material = groundMaterial;

  // Example artifact (Sphere representing an exhibit piece)
  const artifact = MeshBuilder.CreateSphere("artifact", { diameter: 1 }, scene);
  artifact.position.y = 1;
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

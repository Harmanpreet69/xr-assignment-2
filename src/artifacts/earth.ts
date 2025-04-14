import {
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { AdvancedDynamicTexture, Rectangle, TextBlock } from "@babylonjs/gui";

export const createEarth = ({ scene }: { scene: Scene }): Mesh => {
  const artifact = MeshBuilder.CreateSphere("artifact", { diameter: 1 }, scene);
  artifact.position = new Vector3(0, 1, 0);
  artifact.rotate(new Vector3(1, 0, 0), 3.14);

  const artifactMaterial = new StandardMaterial("artifactMaterial", scene);
  artifactMaterial.diffuseTexture = new Texture(
    "https://assets.babylonjs.com/textures/earth.jpg",
    scene
  );
  artifact.material = artifactMaterial;

  // GUI label setup
  const guiTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

  const rect = new Rectangle();
  rect.width = "120px";
  rect.height = "40px";
  rect.cornerRadius = 10;
  rect.color = "white";
  rect.thickness = 2;
  rect.background = "black";
  guiTexture.addControl(rect);

  const label = new TextBlock();
  label.text = "Earth";
  label.color = "white";
  label.fontSize = 14;
  rect.addControl(label);

  rect.linkWithMesh(artifact);
  rect.linkOffsetY = -80; // Adjust position above the sphere

  return artifact;
};

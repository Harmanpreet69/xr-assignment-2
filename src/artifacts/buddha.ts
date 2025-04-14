import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import { AdvancedDynamicTexture, Rectangle, TextBlock } from "@babylonjs/gui";
import "@babylonjs/loaders/OBJ/objFileLoader";
import { importPrefix } from "../importPrefix";

export const loadBuddha = async ({ scene }: { scene: Scene }) => {
  const url = importPrefix + "/models/buda_head.obj";
  const mesh = await ImportMeshAsync(url, scene);

  const buddha = mesh.meshes[0];
  buddha.position = new Vector3(-1, 1, -2);
  buddha.scaling = new Vector3(0.01, 0.01, 0.01);
  buddha.rotate(new Vector3(0, 1, 0), 4.7); // Rotate to face the camera

  // GUI setup
  const guiTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

  const rect = new Rectangle();
  rect.width = "140px";
  rect.height = "40px";
  rect.cornerRadius = 10;
  rect.color = "white";
  rect.thickness = 2;
  rect.background = "black";
  guiTexture.addControl(rect);

  const label = new TextBlock();
  label.text = "Buddha Head";
  label.color = "white";
  label.fontSize = 14;
  rect.addControl(label);

  rect.linkWithMesh(buddha);
  rect.linkOffsetY = -80; // Adjust so it floats above the head

  return buddha;
};

import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import {
  AdvancedDynamicTexture,
  Rectangle,
  TextBlock,
  Control,
} from "@babylonjs/gui";
import { importPrefix } from "../importPrefix";

export const loadBellX1 = async ({ scene }: { scene: Scene }) => {
  const url = importPrefix + "/models/bell_x1_low_resolution.glb";

  const result = await ImportMeshAsync(url, scene);
  const bellX1 = result.meshes[0];

  bellX1.name = "BellX1";
  bellX1.position = new Vector3(0, 0, -10);
  bellX1.scaling = new Vector3(0.001, 0.001, 0.001);
  bellX1.rotate(new Vector3(0, 1, 0), 1.85);

  // GUI setup
  const guiTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

  // Title label
  const titleRect = new Rectangle();
  titleRect.width = "300px";
  titleRect.height = "40px";
  titleRect.cornerRadius = 10;
  titleRect.color = "white";
  titleRect.thickness = 2;
  titleRect.background = "black";
  guiTexture.addControl(titleRect);

  const titleText = new TextBlock();
  titleText.text = "Bell X-1 Rocket Plane";
  titleText.color = "white";
  titleText.fontSize = 16;
  titleText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  titleText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  titleRect.addControl(titleText);

  titleRect.linkWithMesh(bellX1);
  titleRect.linkOffsetY = -130;

  // Description label
  const descRect = new Rectangle();
  descRect.width = "250px";
  descRect.height = "60px";
  descRect.cornerRadius = 8;
  descRect.color = "gray";
  descRect.thickness = 1;
  descRect.background = "rgba(0, 0, 0, 0.7)";
  guiTexture.addControl(descRect);

  const descText = new TextBlock();
  descText.text =
    "In 1948, The Bell X-1 became the first aircraft to break the sound barrier in level flight.";
  descText.color = "white";
  descText.fontSize = 12;
  descText.textWrapping = true;
  descText.paddingLeft = "10px";
  descText.paddingRight = "10px";
  descText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  descText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  descRect.addControl(descText);

  descRect.linkWithMesh(bellX1);
  descRect.linkOffsetY = -70;
};

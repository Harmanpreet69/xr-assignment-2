import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import {
  AdvancedDynamicTexture,
  Rectangle,
  TextBlock,
  Control,
} from "@babylonjs/gui";
import { importPrefix } from "../importPrefix";

export const loadTriceratops = async ({ scene }: { scene: Scene }) => {
  const url =
    importPrefix + "/models/Triceratops_horridus_Marsh_1889-150k-4096.glb";

  const result = await ImportMeshAsync(url, scene);
  const triceratops = result.meshes[0];

  triceratops.name = "Triceratops";
  triceratops.position = new Vector3(-8, 0, 0);
  triceratops.scaling = new Vector3(1, 1, 1);
  triceratops.rotate(new Vector3(0, 1, 0), 1.85);

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
  titleText.text = "Triceratops";
  titleText.color = "white";
  titleText.fontSize = 16;
  titleText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  titleText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  titleRect.addControl(titleText);

  titleRect.linkWithMesh(triceratops);
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
    "Triceratops was a plant-eating dinosaur known for its three horns and large frill.";
  descText.color = "white";
  descText.fontSize = 12;
  descText.textWrapping = true;
  descText.paddingLeft = "10px";
  descText.paddingRight = "10px";
  descText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  descText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  descRect.addControl(descText);

  descRect.linkWithMesh(triceratops);
  descRect.linkOffsetY = -70;
};

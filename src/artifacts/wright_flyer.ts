import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import {
  AdvancedDynamicTexture,
  Rectangle,
  TextBlock,
  Control,
} from "@babylonjs/gui";
import { importPrefix } from "../importPrefix";

export const loadWrightFlyer = async ({ scene }: { scene: Scene }) => {
  const url = importPrefix + "/models/1903WrightFlyer.glb";

  const result = await ImportMeshAsync(url, scene);
  const wrightFlyer = result.meshes[0];

  wrightFlyer.position = new Vector3(0, 2, 6);
  wrightFlyer.scaling = new Vector3(0.5, 0.5, 0.5);
  wrightFlyer.rotate(new Vector3(0, 1, 0), 3.14);

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
  titleText.text = "1903 Wright Flyer";
  titleText.color = "white";
  titleText.fontSize = 16;
  titleText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  titleText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  titleRect.addControl(titleText);

  titleRect.linkWithMesh(wrightFlyer);
  titleRect.linkOffsetY = -130;

  // Description label
  const descRect = new Rectangle();
  descRect.width = "250px";
  descRect.height = "100px";
  descRect.cornerRadius = 8;
  descRect.color = "gray";
  descRect.thickness = 1;
  descRect.background = "rgba(0, 0, 0, 0.7)";
  guiTexture.addControl(descRect);

  const descText = new TextBlock();
  descText.text =
    "The first successful powered aircraft, designed by the Wright brothers. It achieved controlled, sustained flight on December 17, 1903 — marking the birth of modern aviation.";
  descText.color = "white";
  descText.fontSize = 12;
  descText.textWrapping = true;
  descText.paddingLeft = "10px";
  descText.paddingRight = "10px";
  descText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  descText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  descRect.addControl(descText);

  descRect.linkWithMesh(wrightFlyer);
  descRect.linkOffsetY = -70;

  return wrightFlyer;
};

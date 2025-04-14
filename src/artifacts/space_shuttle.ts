import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import {
  AdvancedDynamicTexture,
  Rectangle,
  TextBlock,
  Control,
} from "@babylonjs/gui";
import { importPrefix } from "../importPrefix";

export const loadShuttle = async ({ scene }: { scene: Scene }) => {
  const url =
    importPrefix +
    "/models/Orbiter_Space_Shuttle_OV-103_Discovery-150k-4096.glb";

  const result = await ImportMeshAsync(url, scene);
  const shuttle = result.meshes[0];

  shuttle.name = "OrbiterShuttleDiscovery";
  shuttle.position = new Vector3(5, 2, 0);
  shuttle.scaling = new Vector3(0.25, 0.25, 0.25);
  shuttle.rotate(new Vector3(0, 1, 0), 1.85);

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
  titleText.text = "Orbiter Shuttle Discovery (1/4 Scale)";
  titleText.color = "white";
  titleText.fontSize = 16;
  titleText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  titleText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  titleRect.addControl(titleText);

  titleRect.linkWithMesh(shuttle);
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
  descText.text = "NASA's iconic reusable spacecraft used in over 30 missions.";
  descText.color = "white";
  descText.fontSize = 12;
  descText.textWrapping = true;
  descText.paddingLeft = "10px";
  descText.paddingRight = "10px";
  descText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  descText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
  descRect.addControl(descText);

  descRect.linkWithMesh(shuttle);
  descRect.linkOffsetY = -70;
};

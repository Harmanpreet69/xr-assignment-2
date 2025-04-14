import { MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

export const createPlane = ({ scene }: { scene: Scene }) => {
  const plane = MeshBuilder.CreatePlane(
    "myPlane",
    { width: 100, height: 100 },
    scene
  );

  // Set position
  plane.position = new Vector3(0, 0, 0); // Adjust as needed

  // Rotate to lie flat
  plane.rotation.x = Math.PI / 2; // Rotate 90 degrees to become horizontal

  return plane;
};

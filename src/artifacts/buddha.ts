import { ImportMeshAsync, Scene, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders/OBJ/objFileLoader";

export const loadBuddha = async ({ scene }: { scene: Scene }) => {
  const mesh = await ImportMeshAsync("public/models/buda_head.obj", scene);

  mesh.meshes[0].position = new Vector3(2, 1);
  mesh.meshes[0].scaling = new Vector3(0.01, 0.01, 0.01);
  mesh.meshes[0].rotate(new Vector3(0, 1, 0), 3.14);

  return mesh.meshes[0];
};

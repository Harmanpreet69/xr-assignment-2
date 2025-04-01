import {
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";

export const createEarth = ({ scene }: { scene: Scene }): Mesh => {
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

  return artifact;
};

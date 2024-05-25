import * as THREE from 'three';

const textLoader = new THREE.TextureLoader();
const texture = textLoader.load('../src/assets/earth.jpg');

const textureCube = new THREE.CubeTextureLoader().setPath('../src/assets/env/').load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

const geomery = new THREE.SphereGeometry(40);
const material = new THREE.MeshStandardMaterial({
    map: texture,
    envMap: textureCube,
    transparent: true
});

const mesh = new THREE.Mesh(geomery, material);
mesh.castShadow = true;

export default mesh;

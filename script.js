const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuContainer = document.getElementById('mobile-menu-container');

hamburgerMenu.addEventListener('click', () => {
  if(mobileMenuContainer.classList.contains('make-absolute')){
    mobileMenuContainer.classList.remove('make-absolute');
  } else {
    mobileMenuContainer.classList.add('make-absolute');
  }
  console.log('click!')
})

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometryIcosahedron = new THREE.IcosahedronGeometry(5, 0);
const materialIcosahedron = new THREE.MeshStandardMaterial({ color: 0xb16cea });
const meshIcosahedron = new THREE.Mesh(geometryIcosahedron, materialIcosahedron);

scene.add(meshIcosahedron);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.125);

scene.add(pointLight, ambientLight);
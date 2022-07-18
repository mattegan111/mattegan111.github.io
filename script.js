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

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

const camera = new THREE.PerspectiveCamera( 45, 360 / 360, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(360, 360);
camera.position.setZ(14);

renderer.render(scene, camera);

const geometryIcosahedron = new THREE.IcosahedronGeometry(5, 0);
const materialIcosahedron = new THREE.MeshStandardMaterial({ color: 0xb16cea });
const meshIcosahedron = new THREE.Mesh(geometryIcosahedron, materialIcosahedron);

scene.add(meshIcosahedron);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.125);

scene.add(pointLight, ambientLight);

//Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50, 0xff0000);
// scene.add(lightHelper, gridHelper);

function animate() {
  requestAnimationFrame(animate);

  meshIcosahedron.rotation.x += 0.005;
  meshIcosahedron.rotation.y += 0.0025;
  meshIcosahedron.rotation.z += 0.005;

  renderer.render(scene, camera);
}

animate();


//Current Theme
let theme = 0;
let dirLight, dirLight2;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight * .80);
renderer.setClearColor('rgb(2,15,20)',.15);
renderer.setPixelRatio( window.devicePixelRatio );

//Camera
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  1,
  2500
);

const scene = new THREE.Scene();

dirLight = new THREE.DirectionalLight( 'rgb(4,2,166)', .95 );
dirLight2 = new THREE.DirectionalLight( 'rgb(24,30,66)', .95 );

//Select Theme
const selectTheme = (themeSelect) => {
  if (themeSelect === 0) {
    theme = 0;

    dirLight.color.r = 218;
    dirLight.color.g = 32;
    dirLight.color.b = 12;
    dirLight.color.a = .85;
    dirLight.intensity = .015;
    dirLight.needsUpdate = true;

    dirLight2.color.r = 228;
    dirLight2.color.g = 85;
    dirLight2.color.b = 66;
    dirLight2.color.a = .15;
    dirLight2.intensity = .0115;
    dirLight2.needsUpdate = true;

  } else if (themeSelect === 1) {
    theme = 1;

    dirLight.color.r = 62;
    dirLight.color.g = 62;
    dirLight.color.b = 222;
    dirLight.color.a = .5;
    dirLight.intensity = .0175;
    dirLight.needsUpdate = true;

    dirLight2.color.r = 7;
    dirLight2.color.g = 17;
    dirLight2.color.b = 235;
    dirLight2.color.a = .5;
    dirLight2.intensity = .0075;
    dirLight2.needsUpdate = true;

  } else if (themeSelect === 2) {
    theme = 2;

    dirLight.color.r = 3;
    dirLight.color.b = 217;
    dirLight.color.g = 22;
    dirLight.color.a = .5;
    dirLight.intensity = .015;
    dirLight.needsUpdate = true;

    dirLight2.color.r = 177;
    dirLight2.color.b = 17;
    dirLight2.color.g = 55;
    dirLight2.color.a = .5;
    dirLight2.intensity = .0015;
    dirLight2.needsUpdate = true;

  } else if (themeSelect === 3) {
    theme = 3;

    dirLight.color.r = 255;
    dirLight.color.g = 55;
    dirLight.color.b = 155;
    dirLight.color.a = .5;
    dirLight.intensity = .015;
    dirLight.needsUpdate = true;

    dirLight2.color.r = 55;
    dirLight2.color.g = 252;
    dirLight2.color.b = 21;
    dirLight2.color.a = .5;
    dirLight2.intensity = .0015;
    dirLight2.needsUpdate = true;
  }
}

selectTheme(2);

dirLight.position.set(100, 121, 21);
dirLight2.position.set(-100, -111, 21);

scene.add(dirLight, dirLight2);

const geometryMain = new THREE.CircleGeometry(760, 12, 21);

const geometry = new THREE.SphereGeometry(7, 212, 212);
const geometryb2 = new THREE.SphereGeometry(1, 122, 12);
const geometryb3 = new THREE.SphereGeometry(2, 122, 12);
const geometryb4 = new THREE.SphereGeometry(3, 122, 12);
const geometryb5 = new THREE.SphereGeometry(4, 122, 12);
const geometryb6 = new THREE.SphereGeometry(1, 122, 12);
const geometryb7 = new THREE.SphereGeometry(2, 122, 12);
const geometryb8 = new THREE.SphereGeometry(3, 122, 12);

//Rings!
const geometry2 = new THREE.TorusGeometry( 25, 2, 5, 35, 27 );
const geometry3 = new THREE.TorusGeometry( 31, 2, 7, 35, 28 );
const geometry4 = new THREE.TorusGeometry( 37, 2, 7, 35, 28 );
const geometry5 = new THREE.TorusGeometry( 43, 2, 7, 35, 28 );
const geometry6 = new THREE.TorusGeometry( 49, 2, 7, 35, 28 );
const geometry7 = new THREE.TorusGeometry( 55, 2, 7, 35, 28 );
const geometry8 = new THREE.TorusGeometry( 61, 2, 7, 35, 28 );
const geometry9 = new THREE.TorusGeometry( 67, 2, 7, 35, 28 );
const geometry10 = new THREE.TorusGeometry( 73, 2, 7, 35, 28 );
const geometry11 = new THREE.TorusGeometry( 79, 2, 7, 35, 28 );
const geometry12 = new THREE.TorusGeometry( 85, 2, 7, 35, 28 );

const material = new THREE.MeshPhysicalMaterial({
  reflectivity: 5,
})

const material2 = new THREE.MeshPhysicalMaterial({
  clearcoat: 1,
  clearcoatRoughness: 1,
  reflectivity: 5,
})

const material3 = new THREE.MeshPhysicalMaterial({
  clearcoat: 1,
  clearcoatRoughness: 1,
  reflectivity: 1,
})

const material4 = new THREE.MeshPhysicalMaterial({
  clearcoat: 1,
  clearcoatRoughness: 1,
  reflectivity: .25,
})

let main = new THREE.Mesh(geometryMain, material4);
let mesh = new THREE.Mesh(geometry, material);
let mesh2 = new THREE.Mesh(geometryb2, material);
let mesh3 = new THREE.Mesh(geometryb3, material);
let mesh4 = new THREE.Mesh(geometryb4, material);
let mesh5 = new THREE.Mesh(geometryb5, material);
let mesh6 = new THREE.Mesh(geometryb6, material);
let mesh7 = new THREE.Mesh(geometryb7, material);
let mesh8 = new THREE.Mesh(geometryb8, material);

let ring = new THREE.Mesh(geometry4, material2);
let ring2 = new THREE.Mesh(geometry4, material2);
let ring3 = new THREE.Mesh(geometry4, material2);
let ring4 = new THREE.Mesh(geometry5, material2);
let ring5 = new THREE.Mesh(geometry6, material2);
let ring6 = new THREE.Mesh(geometry7, material2);
let ring7 = new THREE.Mesh(geometry8, material2);
let ring8 = new THREE.Mesh(geometry9, material2);
let ring9 = new THREE.Mesh(geometry10, material2);
let ring10 = new THREE.Mesh(geometry11, material2);
let ring11 = new THREE.Mesh(geometry12, material2);

main.position.set(0, 0, -550);

mesh.position.set(20, 20, -300);
mesh.rotation.set(180, 180, 0);

mesh2.position.set(0, 0, -300);
mesh2.rotation.set(180, 180, 0);

mesh3.position.set(0, 0, -300);
mesh3.rotation.set(180, 180, 0);

mesh4.position.set(0, 0, -300);
mesh4.rotation.set(180, 180, 0);

mesh5.position.set(0, 0, -300);
mesh5.rotation.set(0, 0, 0);

mesh6.position.set(5, 5, -300);
mesh6.rotation.set(0, 0, 0);

mesh7.position.set(5, 5, -300);
mesh7.rotation.set(0, 0, 0);

mesh8.position.set(5, 5, -300);
mesh8.rotation.set(0, 0, 0);

ring.position.set(0, 0, -400);
ring2.position.set(0, 0, -400);
ring3.position.set(0, 0, -400);
ring4.position.set(0, 0, -400);
ring5.position.set(0, 0, -400);
ring6.position.set(0, 0, -400);
ring7.position.set(0, 0, -400);
ring8.position.set(0, 0, -400);
ring9.position.set(0, 0, -400);
ring10.position.set(0, 0, -400);
ring11.position.set(0, 0, -400);


scene.add(
  main,
  mesh, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8,
  ring, ring2, ring3, ring4, ring5, ring6, ring7, ring8, ring9, ring10, ring11);

renderer.render(scene, camera);

//RENDER LOOP
requestAnimationFrame(render);

function render() {

  console.log(mesh.position.z);

  let a = 21;
  let b = 5;

  mesh.position.x = 1 * Math.sin(Date.now() / 340);
  mesh.position.y = 1 * Math.cos(Date.now() / 340);

  mesh2.position.x = mesh.position.x + a * Math.sin(Date.now() / 240);
  mesh2.position.y = mesh.position.y - b * Math.cos(Date.now() / 240);
  mesh2.position.z = mesh.position.z;

  mesh3.position.x = mesh.position.x + a * Math.sin(Date.now() / 242);
  mesh3.position.y = mesh.position.y + b * Math.cos(Date.now() / 242) ;
  mesh3.position.z = mesh.position.z ;

  mesh4.position.x = mesh.position.x + a * Math.sin(Date.now() / 244);
  mesh4.position.y = mesh.position.y - b * Math.cos(Date.now() / 244) ;
  mesh4.position.z = mesh.position.z;

  mesh5.position.x = mesh.position.x + a * Math.sin(Date.now() / 246);
  mesh5.position.y = mesh.position.y + b * Math.cos(Date.now() / 246) ;
  mesh5.position.z = mesh.position.z ;

  mesh6.position.x = mesh.position.x + a * Math.sin(Date.now() / 248);
  mesh6.position.y = mesh.position.y - b * Math.cos(Date.now() / 248) ;
  mesh6.position.z = mesh.position.z;

  mesh7.position.x = mesh.position.x + a * Math.sin(Date.now() / 250);
  mesh7.position.y = mesh.position.y + b * Math.cos(Date.now() / 250) ;
  mesh7.position.z = mesh.position.z ;

  mesh8.position.x = mesh.position.x + a * Math.sin(Date.now() / 252);
  mesh8.position.y = mesh.position.y - b * Math.cos(Date.now() / 252) ;
  mesh8.position.z = mesh.position.z;

  ring3.rotation.z += .007;
  ring4.rotation.z += .014;
  ring5.rotation.z += .021;
  ring6.rotation.z += .007;
  ring7.rotation.z += .014;
  ring8.rotation.z += .021;
  ring9.rotation.z += .007;
  ring10.rotation.z += .014;
  ring11.rotation.z += .021;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

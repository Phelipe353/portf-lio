import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

let countries;
let container;
let renderer;
let scene;
let camera;
let controls;


let Globe;


export async function planet(props) {
    const response = await fetch('./files/countries.geo.json');
    countries = await response.json();

    container = props;

    init();
    initGlobe();
    animate();
}

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.setPixelRatio(window.devicePixelRatio);


    if (container.childNodes) container.innerHTML = '';
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
    scene.add(ambientLight);
    scene.background = new THREE.Color(0x040d21);

    camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    // camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    const dLight1 = new THREE.DirectionalLight(0x0BCDD9, 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    const dLight2 = new THREE.DirectionalLight(0x0B9EE3, 0.5);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    camera.position.z = 350;

    scene.add(camera);
    scene.fog = new THREE.Fog(0x0055CC, 400, 2000);

    controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dynamicDampingFactor = 0.01;
    // controls.enablePan = false;
    // controls.minDistance = 500;
    // controls.maxDistance = 500;
    // controls.zoomSpeed = 0.1;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.enableZoom = false;

    // controls.minPolarAngle = Math.PI / 3.5;
    // controls.maxPolarAngle = Math.PI - Math.PI / 3;

    window.addEventListener('resize', onWindowResize, false);
    // document.addEventListener('mousemove', onMouseMove);

}

function initGlobe() {
    Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
    }).hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonColor(() => "#ffffff")
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#0B2CE3")
        .atmosphereAltitude(0.20);


    // setTimeout(() => {
    //   Globe.arcsData(lines.pulls)
    //     .arcColor((e) => e.status ? "#9cff00" : "#ff4000")
    //     .arcAltitude((e) => e.arcAlt * 5) 
    //     // .arcStroke((e) => e.status ? 0.5 : 0.3)
    //     .arcDashLength(0.9)
    //     .arcDashGap(4)
    //     .arcDashAnimateTime(1000)
    //     .arcsTransitionDuration(1000)
    //     .arcDashInitialGap((e) => e.order * 1)
    //     .labelsData(map.maps)
    //     .labelColor(() => "#ffcb21")

    //     .labelDotRadius(0.3)
    //     .labelSize((e) => e.size)
    //     .labelText("city")
    //     .labelResolution(6)
    //     .labelAltitude(0.01)
    //     .pointsData(map.maps)
    //     .pointColor(() => "#ffffff")
    //     .pointsMerge(true)
    //     .pointAltitude(0.07)
    //     .pointRadius(0.05);
    // }, 1000)


    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateZ(-Math.PI / 6);

    const globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new THREE.Color(0x0B2CE3);
    globeMaterial.emissive = new THREE.Color(0x220BD9);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;

    scene.add(Globe);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    // camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    render();
}

function animate() {
    camera.lookAt(scene.position);
    controls.update();
    render()
    requestAnimationFrame(animate);
}

function render() {
    renderer.render(scene, camera);
}


(function() {
  "use strict";

  window.addEventListener("load", function() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    // camera
    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      10000
    );
    camera.position.set(0, -20, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    renderer.setViewport(0, 0, width, height);

    document.body.appendChild(renderer.domElement);

    // scene
    const scene = new THREE.Scene();

    // cube
    const material = new THREE.MeshLambertMaterial({
      color: 0xff0000
    });
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const mesh = new THREE.Mesh(geometry, material);

    // light
    const light = new THREE.DirectionalLight();
    light.position.set(0, 100, 100);

    scene.add(light);
    scene.add(mesh);

    // skybox
    const cubeMap = new THREE.CubeTexture([]);
    cubeMap.format = THREE.RGBFormat;
    cubeMap.flipY = false;

    const loader = new THREE.ImageLoader();
    loader.load("../texture/skyboxsun25degtest.png", function(image) {
      const getSize = function(x, y) {
        const size = 1024;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext("2d");
        context.drawImage(image, -x * size, -y * size);

        return canvas;
      }

      cubeMap.images[0] = getSide(2, 1);
      cubeMap.images[1] = getSide(0, 1);
      cubeMap.images[2] = getSide(1, 0);
      cubeMap.images[3] = getSide(1, 2);
      cubeMap.images[4] = getSide(1, 1);
      cubeMap.images[5] = getSide(3, 1);
      cubeMap.needsUpdate = true;
    });

    const cubeShader = THREE.ShaderLib("cube");
    cubeShader.uniform("tCube").value = cubeMap;

    const skyboxMaterial = new THREE.ShaderMaterial({
      fragmentShader: cubeShader.fragmentShader,
      vertexShader: cubeShader.vertexShader,
      uniform: cubeShader.uniforms,
      depthWrite: false,
      side: THREE.BackSide
    });

    const skybox = new THREE.Mesh(
      new THREE.BoxGeometry(10000, 10000, 10000),
      skyboxMaterial
    );

    scene.add(skybox);

    const ua = navigator.userAgent.toLowerCase();
    const isSmartphone = !!(
      ~ua.indexOf("iphone") ||
      ~ua.indexOf("ipad") ||
      ~ua.indexOf("ipod") ||
      ~ua.indexOf("android")
    )

    // OrbitControls
    const OrbitControls = new THREE.OrbitControls(camera);

    // DeviceOrientationControls
    const orientationControls = new THREE.DeviceOrientationControls(camera);

    // VRControls
    const vrControls = new THREE.VRControls(camera);

    // VREffect
    const effect = new THREE.VREffect(renderer);
    effect.setSize(width, height);

    // animationloop
    (function loop() {
      mesh.rotation.y += 0.01;
      vrControls.update();
      orbitControls.update();
      if (isSmartphone) {
        orientationControls.update();
      }
      effect.render(scene, camera);
      requestAnimationFrame(loop);
    }());

    // resize
    window.addEventListener("resize", function() {
      width = window.innerWidth;
      height = window.innerHeight;
      effect.setSize(width, height);
      renderer.setSize(width, height);
      renderer.setViewport(0, 0, width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }, false);

    // button click
    document.getElementById("btn").addEventListener("click", function() {
      effect.setFullScreen(true);
    }, false);
  });
}());

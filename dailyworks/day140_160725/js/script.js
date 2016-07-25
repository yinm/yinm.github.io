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
      1000
    );
    camera.position.set(0, 10, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    // renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    renderer.setViewport(0, 0, width, height);

    document.body.appendChild(renderer.domElement);

    // scene
    const scene = new THREE.Scene();

    // cube
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff
    });
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -30, -30);

    // light
    const light = new THREE.DirectionalLight();
    light.position.set(0, 100, 100);

    scene.add(light);
    scene.add(mesh);

    // VRControls
    const controls = new THREE.VRControls(camera);

    // VREffect
    const effect = new THREE.VREffect(renderer);
    effect.setSize(width, height);

    // animation loop
    (function loop() {
      mesh.rotation.y += 0.01;
      controls.update();
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

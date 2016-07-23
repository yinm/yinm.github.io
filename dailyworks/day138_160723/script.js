(function() {
  "use strict";
  window.addEventListener("load", function() {
    const container = document.getElementById("container");
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );

    const geometry = new THREE.Geometry();
    for(let i = 0; i < 5000; i++) {
      const x = Math.floor(Math.random() * 1000 - 500);
      const y = Math.floor(Math.random() * 1000 - 500);
      const z = Math.floor(Math.random() * 1000 - 500);
      geometry.vertices.push(new THREE.Vector3(x, y, z));
    }

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(0x0000ff),
      size: 10
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const render = () => {
      camera.rotation.x += 0.0025;
      camera.rotation.y += 0.005;
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();
  });
})();

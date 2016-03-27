
// Render
var renderer = new THREE.WebGLRenderer();
// 画面の表示サイズ（基本的には画面全体にするはずなので、こうしている）
renderer.setSize(window.innerWidth, window.innerHeight);
// GPUに負荷を軽減するために使う。引数は数値だが、端末による場合は以下のように書く。（MBP13インチだと顕著にGPUに負荷がかかる）
renderer.setPixelRatio(window.devicePixelRatio);


// Camera
// fov(Field Of View)は、人間の視線のこと。
// farの例（昔のプレステのゲームで遠くの山が、最初は表示されていないのに、プレイヤーが近づくと表示されるやつは、まさにfarで設定しているから。これは、全体をレンダリングすると処理が重すぎるから、範囲を決めている。）
// nearを0にするのはできない（表裏がわからなくなるから。内部的にじょさんするが、0だと割れないという数学的な理由もある。）
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 0.1;
var far = 1000;

var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;
camera.position.y = 1;


// scene
// HTMLで言うdivを作ってる感じ
var scene = new THREE.Scene();

// HTMLにレンダリングするために、canvas要素の追加（このファイル（JS）ではなく、ブラウザはHTMKを表示するため）。
document.body.appendChild(renderer.domElement);


// light
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(10, 10, 5);

scene.add(light);

// 環境光を追加する。全体を見えるようにするライトのこと。光が当たっていない部分でもライトを当てるために使う。
// ambient = 環境。
var ambient = new THREE.AmbientLight(0x333333);
scene.add(ambient);



// テクスチャーの追加
// textureLoaderのloadメソッドを使用する。
var textureLoader = new THREE.TextureLoader();
textureLoader.load('img/texture.jpg', function(texture) {
  // plane
  // planeは厚みのない板のため、幅と高さだけ設定する。
  var planeGeo = new THREE.PlaneGeometry(5, 5);
  // materialは共有できる。同じ表現をするmaterialは同じにしておけばいい。
  var planeMat = new THREE.MeshLambertMaterial({
    // テクスチャーの適用
    map: texture
  });
  var plane = new THREE.Mesh(planeGeo, planeMat);
  // 傾きを指定（右手座標系）。基本的にはラジアンで指定する。
  // 画面の角度を「deg」 と「Rad」指定することができる。
  plane.rotation.x = THREE.Math.degToRad(-90);

  scene.add(plane);
});

// モデルデータの生成
// new THREE.Object3D()は、JSの都合。（これがないとrotationメソッドが使えない。また、JSONLoaderは非同期メソッドなので、bedを外部で変数かしておかないと、変数が存在しないというエラーになる）
var bed = new THREE.Object3D();
var bedLoader = new THREE.JSONLoader();
// materialの配列が渡されるので、materialsにする。これは複数のマテリアルが使用されている場合があるので、materialは配列として渡されるため。
bedLoader.load('models/bed.json', function(geometry, materials) {
  // materialsの配列を、扱える状態にするメソッド
  var material = new THREE.MeshFaceMaterial(materials);

  // 後はcubeとかと同じように、オブジェクトを作成する。
  bed = new THREE.Mesh(geometry, material);

  // 今回のbedが大きいので、サイズを調整する。（小さくしている。）
  var s = 0.5;
  bed.scale.set(s, s, s)
  bed.position.x = -1;

  scene.add(bed);
});


// テーブル
var table = new THREE.Object3D();
var tableLoader = new THREE.JSONLoader();
// materialの配列が渡されるので、materialsにする。これは複数のマテリアルが使用されている場合があるので、materialは配列として渡されるため。
tableLoader.load('models/table.json', function(geometry, materials) {
  // materialsの配列を、扱える状態にするメソッド
  var material = new THREE.MeshFaceMaterial(materials);

  // 後はcubeとかと同じように、オブジェクトを作成する。
  table = new THREE.Mesh(geometry, material);

  // 今回のbedが大きいので、サイズを調整する。（小さくしている。）
  var s = 0.25;
  table.scale.set(s, s, s);
  table.position.x = 1.2;

  scene.add(table);
});




// AnimationLoop
// 無限ループを作って、画面をupdateする処理。
function animate() {
  // sceneとcameraを引数に渡すのは、sceneとcameraを複数作成して、レンダリングできることを表している。
  renderer.render(scene, camera);

  // bed・tableの回転処理
  bed.rotation.y += 0.01;
  table.rotation.y += 0.01;

  // 無限ループ
  requestAnimationFrame(animate);
}
// 定義した関数の実行
animate();

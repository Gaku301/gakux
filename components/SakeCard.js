import { useState } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useEffect } from "react";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getSakeInfo } from '../lib/sake';


const SakeCard = ({selectedSake}) => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(238, 238, 238)");
    // Camera
    const camera = new THREE.PerspectiveCamera(90, (window.innerWidth/2) / (window.innerHeight/2), 1, 2000);
    camera.position.z = 2;
    camera.position.x = 5;
    camera.position.y = 0.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas"),
    });
    renderer.setSize(window.innerWidth/2, window.innerHeight/2, false);

    // Light(入れないと真っ黒になる)
    const light = new THREE.AmbientLight(0xf5f5f5, 5);
    scene.add(light);

    // マウス操作を可能にさせる
    new OrbitControls(camera, renderer.domElement);
   
    let model = null;
    // Loader(gltf|glb)
    const loader = new GLTFLoader();
    loader.load(selectedSake?.src, function (gltf) {
      model = gltf.scene;
      model.scale.set(2, 2, 2);
      scene.add(model);
      animate();
    }, undefined, function (error) {
      console.error(error);
    });

    function animate() {
      requestAnimationFrame(animate);
      // 横回転
      model.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
  }, [selectedSake])

  return (
    <div className="">
      <div className="p-5">
        <h5 className="font-semibold text-xl">{`${selectedSake.name}（${selectedSake.enName}）`}</h5>
      </div>
      <canvas id="canvas" className="shadow-2xl rounded-2xl mx-auto"></canvas>
    </div>
  )
}

export default SakeCard;
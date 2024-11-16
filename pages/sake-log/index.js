import Layout from "../layout";
import Header from "../../components/header"
import Footer from "../../components/footer";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useEffect } from "react";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const About = () => {
  const title = "sake log";
  const description = "This page show my favorite SAKE.";
  const keywords = "sake,sake-log,SAKE,japanese-sake,日本酒,記録"
  const url = "sake-log"

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(238, 238, 238)");
    // Camera
    const camera = new THREE.PerspectiveCamera(90, (window.innerWidth/3) / (window.innerHeight/2), 1, 2000);
    camera.position.z = 5;
    camera.position.x = 5;
    camera.position.y = 0.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas"),
    });
    renderer.setSize(window.innerWidth/3, window.innerHeight/2, false);

    // Light(入れないと真っ黒になる)
    const light = new THREE.AmbientLight(0xf5f5f5, 5);
    scene.add(light);

    // マウス操作を可能にさせる
    new OrbitControls(camera, renderer.domElement);

    let model = null;
    // Loader(gltf|glb)
    const loader = new GLTFLoader();
    const houraisen = 'models/houraisen.glb';
    const zaku = 'models/zaku.glb';
    loader.load(zaku, function (gltf) {
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
  }, [])

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
      url={url}
    >
      <Header/>
      <main className="container m-auto">
        <div className="container xs:px-5 md:px-10 lg:px-48 my-20">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold">sake</h1>
            <p className="p-5">今まで飲んだ日本酒たち</p>
          </div>
          <div className="md:flex md:justify-center pb-10 mb-10">
            <canvas id="canvas" className="shadow-2xl rounded-lg"></canvas>
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  )
}

export default About;
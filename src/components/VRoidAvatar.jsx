import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";

const VRoidAvatar = ({ modelUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.4, 2); // Adjust position to fit the avatar

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    canvasRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Load VRoid Model
    const loader = new THREE.GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(
      modelUrl,
      (gltf) => {
        const vrm = gltf.userData.vrm;
        VRMUtils.rotateVRM0(vrm); // Fix rotation issues if needed
        scene.add(vrm.scene);
      },
      undefined,
      (error) => console.error("VRM Load Error:", error)
    );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, [modelUrl]);

  return <div ref={canvasRef} />;
};

export default VRoidAvatar;

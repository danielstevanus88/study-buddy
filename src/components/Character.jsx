import React, { useEffect, useState } from 'react';
import { VRMLoaderPlugin } from '@pixiv/three-vrm'; // Import the plugin
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // GLTFLoader is required

function Character({ url }) {
    const [vrm, setVrm] = useState(null);

    useEffect(() => {
      const gltfLoader = new GLTFLoader();
  
      // Register the VRMLoaderPlugin
      gltfLoader.register((parser) => new VRMLoaderPlugin(parser));
  
      // Load the VRM file
      gltfLoader.load(url, (gltf) => {
        const vrm = gltf.userData.vrm; // Access the VRM instance
        setVrm(vrm);
      });
    }, [url]);
  
    if (!vrm) return null; // Return nothing until the VRM is loaded
  
    return <primitive object={vrm.scene} />;
}


export default Character;
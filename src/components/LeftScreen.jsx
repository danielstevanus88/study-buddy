import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // GLTFLoader is required

import Character from './Character';

function LeftScreen() {
    const modelUrl = 'https://hub.vroid.com/en/characters/334426882924154754/models/61155852553915930'; // Replace with your VRM file URL

    return (
        <div>
            aa
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<span>Loading...</span>}>
                    <Character url={modelUrl} />
                </Suspense>
            </Canvas>
        </div>
    );


}
export default LeftScreen;
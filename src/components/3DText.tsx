import * as THREE from 'three'
import { useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'
/*
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js'
*/

function D3Text() {

    const textRef = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        if (textRef.current) {
            textRef.current.geometry.center()
            //we cant call center() inside useFrame, its too computationally expensive to do every single frame
        }
    }, [])

    useFrame((_, delta) => {
        //what is delta and why would we use delta and not a hardcoded number like 0.01?
        //delta represents elapsed time between frames, it ensures consistency across different framerates
        //for a 60 fps monitor delta equals around 0.0167 (1/60th of a second)
        //for a 30 fps monitor delta would be 0.0333
        //and it makes sense if you think about it, 
        //if you only have half as many frames, you have to move the object twice as far between frames
        //so you can create a speed variable equal to some factor or multiple of PI 
        //and multiply it by delta to get a certain number of rotations per second

        const speed = Math.PI / 3

        textRef.current.rotation.y += speed * delta
    })
    
    return (
        <Text3D ref={textRef} position={[0, -1, 2]} rotation={[-0.5, 0, 0]} scale={0.5}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.2}
          font='./Alan_Sans.json'>
          {`Lucca\nChantre`}
          <meshNormalMaterial />
        </Text3D>
    )
}

export default D3Text
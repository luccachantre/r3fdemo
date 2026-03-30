import { usePlane } from '@react-three/cannon'
import type { Triplet } from '@react-three/cannon'
import * as THREE from 'three'
import type { ThreeElements } from '@react-three/fiber'

function Floor(props: ThreeElements['mesh']) {
    const [meshRef] = usePlane<THREE.Mesh>(() => ({ 
        type: 'Static', 
        mass: 0, 
        position: props.position as Triplet,
        rotation: props.rotation as Triplet
    }))

    return (
        <mesh receiveShadow rotation={props.rotation} ref={meshRef}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color={'#2f74c0'} />
        </mesh>
    )
}

export default Floor
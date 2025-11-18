import { useBox } from '@react-three/cannon'
import type { ThreeElements } from '@react-three/fiber'
import type { Triplet } from '@react-three/cannon'
import * as THREE from 'three'

type BaseBoxProps = ThreeElements['mesh'] & {
    args?: [number, number, number]
    color?: THREE.ColorRepresentation
}

function BaseBox(props: BaseBoxProps) {
    const [meshRef, api] = useBox<THREE.Mesh>((index) => ({ 
        type: 'Static', 
        mass: 1, 
        onCollide: (e) => {
            console.log(e)
        },
        position: props.position as Triplet,
        rotation: props.rotation as Triplet

    }))

    return (
        <mesh castShadow position={props.position} ref={meshRef} >
            <boxGeometry args={props.args} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    )
}

export default BaseBox
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    let a = 0.01
    useFrame((_, delta) => {
        //usually its useFrame((state, delta) =>
        // but we dont use state, and if we remove it and make it useFrame((delta))
        //then it will treat delta as the state variable and cause an error on meshRef.current.rotation.x = delta
        //so we can get around this by putting _ instead of state, it tells typescript 
        // "I'm intentionally not using this variable"
        meshRef.current.rotation.x += delta
        //meshRef.current.position.x = Math.sin(a)
        a += 0.01
    })


    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1 : 0.5}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>

    )
}

export default Box




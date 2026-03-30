import * as THREE from 'three'
import { useRef, useEffect } from 'react'
/*
import { useFrame, useLoader } from '@react-three/fiber'
*/
import type { ThreeElements } from '@react-three/fiber'
import { Plane, useTexture } from '@react-three/drei'

function Scene(props: ThreeElements['mesh']) { 
    const meshRef = useRef<THREE.Mesh>(null!)

    const planeProps = useTexture({
        map: './grassFiles/Grass005_1K-JPG_Color.jpg',
        displacementMap: './grassFiles/Grass005_1K-JPG_Displacement.jpg',
        normalMap: './grassFiles/Grass005_1K-JPG_NormalGL.jpg',
        roughnessMap: './grassFiles/Grass005_1K-JPG_Roughness.jpg',
        aoMap: './grassFiles/Grass005_1K-JPG_AmbientOcclusion.jpg'
    })
    

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.lookAt(0, 10, 0)
        }
    }, [])

    // useFrame((state, delta) => (
    //     meshRef.current.lookAt(0, 1, 0) //the only way I could think of to orient the plane to be horizontal
    // ))

    return (
        <Plane
        {...props}
        args={[10, 10]}
        position={[0, -2, 0]}
        // color={'blue'} //not working/not the right way to do it, fix next time (and do texture loading and mapping)
        ref={meshRef}>

        <meshStandardMaterial color={'#5c4bb8'} /> 
        {/* //this is how you apply a regular color  */}
        <meshStandardMaterial {...planeProps} displacementScale={0.2}/>
        </Plane>

    )
}

export default Scene
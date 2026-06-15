import * as THREE from 'three';
import { useRef, useState} from 'react'
import { useFrame} from '@react-three/fiber'
//import type { ThreeElements } from '@react-three/fiber'

const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3( 0, 0, 2 ),
	new THREE.Vector3( -5, 0, 0 ),
	new THREE.Vector3( 0, 0, -5 ),
	new THREE.Vector3( 5, 0, 0 ),
	new THREE.Vector3( 0, 2, 0.5 )
], true)

const points = curve.getPoints(100)
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({color: 0xc96ce6})
const curveObject = new THREE.Line(geometry, material);

//props isn't needed here
// function CurveCamera(props: ThreeElements['mesh']) {
function CurveCamera() { 
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, _] = useState(false)

    let x = 0;

    useFrame((state) => {
        //delta is not elapsed time, it's how much time has passed between frames I think
        
        //something.getPointAt
        //meshRef.current.position.copy()

        const t = (state.clock.getElapsedTime() / 1 % 6)  / 6 //divide by number of points + 1 for some reason?
        //idk the youtube video said its standard, and it works so yeah idk

        const position = curve.getPointAt(t)
        const tangent = curve.getTangentAt(t).normalize()

        meshRef.current.position.copy(position)
        meshRef.current.lookAt(position.clone().add(tangent))


        // camera.position.copy(position)
        // camera.position.z = Math.sin(x) + 5
        // camera.up.set(Math.cos(x * 0.8) , Math.sin(x * 0.8) + 3, 0)

        // camera.lookAt(position.clone().add(tangent))
        // camera.lookAt(position)
        x += 0.01
    
    })


    return (
        <>
            <primitive object={curveObject}/>
            <mesh
            // {...props}
            ref={meshRef}
            scale = {0.75}>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
            </mesh>
        </>
    )
}

export default CurveCamera
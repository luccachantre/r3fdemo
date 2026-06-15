import * as THREE from 'three'
import { useRef, useState} from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'

function CameraBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [startTime, setStartTime] = useState(performance.now())

    const { camera } = useThree()

    useFrame(() => {
        //const elapsed = performance.now() * 0.001;
        if (active) {
            const elapsed = (performance.now() - startTime) * 0.001;
            const duration = 3

            if (elapsed < duration) { //my solution to animate over a certain period of time, not sure about position though
                //const speed = 1

                let xAmount = (meshRef.current.position.x + 5) - camera.position.x
                let zAmount = (meshRef.current.position.z - 5) - camera.position.z
                let yAmount = (meshRef.current.position.y + 5) - camera.position.y

                camera.position.x += xAmount / 200
                camera.position.z += zAmount / 200
                camera.position.y += yAmount / 200

                //ok so I accidentally discovered ease in/ease out or camera.position.lerp()
                

                // camera.position.x = Math.sin(elapsed * speed) * 1 
                // camera.position.z = Math.cos(elapsed * speed) * 1 
                // if (elapsed < 1.50) {
                //     camera.position.y = -Math.sin(elapsed * speed)
                // } else {
                //     camera.position.y = -Math.sin(elapsed * speed)
                // }
                //the * 1 and * 5 constants determine how far or close to the origin the camera will be
                camera.lookAt(0, 0, 0)
            } 
            
        } else {
            //const elapsed = (performance.now() - startTime) * 0.001;

            //THIS IS OVERRIDING OUR CAMERA POSITION DECLARATION IN App.tsx, 
            // but we need it so the second click on the box resets the camera
            //we will investigate further and resolve this issue at a later time

            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 4
            camera.lookAt(0, 0, 0)
            
        }
    })

    // if (!active) {
    //         camera.position.x = 0
    //         camera.position.y = 3
    //         camera.position.z = 5
    //         camera.lookAt(0, 0, 0)
    // }

    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={1}
        onClick={() => {
            setActive(!active)
            setStartTime(performance.now())
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={hover ? '#ab53e6' : '#e39144'} />
        </mesh>

    )
}

export default CameraBox




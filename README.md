# react three fiber demo (not actual portfolio)

https://r3f-demo-steel.vercel.app/

## frameworks/architecture/stack

This is a react project with threejs via react three fiber (R3F)

this project will use vite as the build tool, then react and threejs and react three fiber, and typescript as well.

### project setup

first I had to install node 22.19 because I had node 18.7 before and it said you need at least node 20 for vite projects. so I did that, and since I already had this folder with the git repo and a readme, to start the vite project I ran "npm create vite@latest .", the . is so it creates it in the current folder. then I chose to ignore files and continue (since current directory wasnt empty), chose react as the framework, and chose typescript + swc (speedy web compiler) as the variant. Then it created a bunch of files and said "done, run npm install and npm run dev".

So then I ran npm install, then I ran npm install three @react-three/fiber @react-three/drei.

locally, I run npm run dev, but when hosting, vercel runs npm build, which caused some issues. I had some imported assets that I didnt use, and also some declared variables that I never used, which were fine when running with npm run dev, but when vercel ran npm run build, it failed the build because of those unused things, and so I had to go in and comment them out or remove them.

drei is a helper toolkit for react three fiber that makes some common tasks much easier like adding html components to a 3d scene, orbit controls, perspective camera setup, 3d text, loading gltf models easily, adding prebuilt skyboxes, and more. And react three fiber is something that lets threejs integrate easily with react, where we can create 3d objects as reusable react components and can apply hooks and state and useEffect and stuff I think

We'll also need to do npm install three @react-three/cannon

Cannon is a physics library

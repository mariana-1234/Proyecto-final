//escena
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load('./imagenes/cont-8.jpg', function(texture) {
    scene.background = texture;
})

//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Personaje
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('./imagenes/figura/figura.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.5,0.5,0.5);
    loaderObjeto.position.y =5;
    loaderObjeto.position.x =20;
    loaderObjeto.position.z =-150;

    scene.add(loaderObjeto)
    console.log('carga completa');

    const DragControls = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement );
    DragControls.deactivate();
    DragControls.activate();
    
    DragControls.addEventListener("hoveron", function (event){
        event.object.material.wireframe = true;
        event.object.scale.y *=1;
    });
    DragControls.addEventListener("hoveroff",function(event){
        event.object.material.wireframe = false;
        event.object.scale.y /=1;
    }) 

}, ()=>{
    console.log('cargado');

}, ()=>{
    console.log('error');

}

);

gltfLoader.load('./imagenes/dino/Taurus.gltf',
(gltf) =>{
    var loaderObjeto1 = gltf.scene;
    loaderObjeto1.scale.set(6,6,6);
    loaderObjeto1.position.y =-100;
    loaderObjeto1.position.x =90;
    loaderObjeto1.position.z =-120;

    scene.add(loaderObjeto1)
    console.log('carga completa');

const DragControls = new THREE.DragControls( [loaderObjeto1], camera, renderer.domElement );
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
    event.object.material.wireframe = true;
    event.object.scale.y *=1;
});
DragControls.addEventListener("hoveroff",function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /=1;
}) 

}, ()=>{
    console.log('cargado');

}, ()=>{
    console.log('error');

}

);

gltfLoader.load('./imagenes/Nino/flin.gltf',
    (gltf) => {
        var loaderObjeto2 = gltf.scene;
        loaderObjeto2.scale.set(0.2, 0.2, 0.2);

        loaderObjeto2.position.x = -40;
        loaderObjeto2.position.y = -40;
        loaderObjeto2.position.z = 20;

        scene.add(loaderObjeto2);
        console.log('carga completa');


const DragControls = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
    event.object.material.wireframe = true;
    event.object.scale.y *=1;
});
DragControls.addEventListener("hoveroff",function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /=1;
}) 

    }, () => {
        console.log('cargando');

    }, () => {
        console.log('error');
    }
);








 const Light1 =new THREE.DirectionalLight(0xffffff,1)
 Light1.position.set(6,6,6)
 scene.add(Light1)

 const al =new THREE.AmbientLight(0xffffff,1)
 scene.add(al)
 
 //posición
 camera.position.z = 90;
 
 //animación
 function animate() {
     requestAnimationFrame(animate);
    
     renderer.render(scene, camera);
     
}
animate();



 


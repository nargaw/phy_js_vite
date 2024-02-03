import * as THREE from 'three'
import Experience from '../Experience'
import * as CANNON from 'cannon-es'

export default class Ground{
    constructor(){
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.physicsWorld = this.experience.physics.world
        this.ground()
        this.setGroundPhysics()
    }

    ground()
    {
        this.material = new THREE.MeshStandardMaterial({color: 'lightblue'})
        this.geometry = new THREE.PlaneGeometry(100, 100)
        this.groundMesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.groundMesh)
        this.groundMesh.rotation.x = -Math.PI * 0.5
        this.groundMesh.position.y = -.01

        this.size = 100
        this.divisions = 100
        this.gridHelper = new THREE.GridHelper(this.size, this.divisions, 0x1f1f1f, 0x1f1f1f )
        this.gridHelper.position.y = -0
        if(this.debug) this.scene.add(this.gridHelper) 
    }

    setGroundPhysics()
    {
        this.groundBody = new CANNON.Body({
            // type: CANNON.Body.STATIC,
            mass: 0,
            shape: new CANNON.Plane()
        })

        this.groundBody.quaternion.setFromEuler(-Math.PI/2, 0, 0)
        this.physicsWorld.addBody(this.groundBody)
    }
}
import Experience from "../Experience";
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

export default class EnclosedBox{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.world = this.experience.physics.world
        this.setBox()
        this.setEnclosedBoxPhysics()
    }

    setBox()
    {
        this.material = new THREE.MeshNormalMaterial()
        //leftwall
        this.leftWall = new THREE.Mesh(
            new THREE.BoxGeometry(200, 100, 5),
            this.material
        )
        this.leftWall.rotation.set(0, -Math.PI * 0.5, 0)
        this.leftWall.position.set(-25, 0, 0)

        //rightwall
        this.rightWall = new THREE.Mesh(
            new THREE.BoxGeometry(200, 100, 5),
            this.material
        )
        this.rightWall.rotation.set(0, -Math.PI * 0.5, 0)
        this.rightWall.position.set(25, 0, 0)

        //topwall
        this.topWall = new THREE.Mesh(
            new THREE.BoxGeometry(50, 200, 5),
            this.material
        )
        this.topWall.rotation.set(-Math.PI * 0.5, 0, 0)
        this.topWall.position.set(0, 50, 0)

        //bottomwall
        this.bottomWall = new THREE.Mesh(
            new THREE.BoxGeometry(50, 200, 5),
            this.material
        )
        this.bottomWall.rotation.set(-Math.PI * 0.5, 0, 0)
        this.bottomWall.position.set(0, -50, 0)

        //backwall
        this.backWall = new THREE.Mesh(
            new THREE.BoxGeometry(50, 100, 5),
            this.material
        )
        this.backWall.position.set(0, 0, -100)

        //frontwall
        this.frontWall = new THREE.Mesh(
            new THREE.BoxGeometry(50, 100, 5),
            new THREE.MeshStandardMaterial({visible: false})
        )
        this.frontWall.position.set(0, 0, 100)

        this.scene.add(this.leftWall, this.rightWall, this.topWall, this.bottomWall, this.backWall, this.frontWall)
    }

    setEnclosedBoxPhysics()
    {
        this.leftRightWalls = new CANNON.Vec3(2.5, 50, 100)
        this.topBottomWalls = new CANNON.Vec3(25, 2.5, 100)
        this.frontBackWalls = new CANNON.Vec3(25, 50, 2.5)
        this.boxShape = new CANNON.Box(this.leftRightWalls)
        this.boxShape2 = new CANNON.Box(this.topBottomWalls)
        this.boxShape3 = new CANNON.Box(this.frontBackWalls)
        
        //left
        this.leftBody = new CANNON.Body({mass: 0, shape: this.boxShape})
        this.leftBody.position.set(-25, 0, 0)
        this.world.addBody(this.leftBody)

        //right
        this.rightBody = new CANNON.Body({mass: 0, shape: this.boxShape})
        this.rightBody.position.set(25, 0, 0)
        this.world.addBody(this.rightBody)

        //top
        this.topBody = new CANNON.Body({mass: 0, shape: this.boxShape2})
        this.topBody.position.set(0, 50, 0)
        this.world.addBody(this.topBody)

        //bottom
        this.bottomBody = new CANNON.Body({mass: 0, shape: this.boxShape2})
        this.bottomBody.position.set(0, -50, 0)
        this.world.addBody(this.bottomBody)

        //back
        this.backBody = new CANNON.Body({mass: 0, shape: this.boxShape3})
        this.backBody.position.set(0, 0, -100)
        this.world.addBody(this.backBody)

        //front
        this.frontBody = new CANNON.Body({mass: 0, shape: this.boxShape3})
        this.frontBody.position.set(0, 0, 100)
        this.world.addBody(this.frontBody)
    }
}
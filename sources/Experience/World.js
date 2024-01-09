import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import Experience from './Experience.js'
import Environment from './environment.js'
import Ground from './Scene/Ground.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.physicsWorld = this.experience.physics.world
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDummy()
                this.environment = new Environment()
            }
        })
        this.ground = new Ground()
    }

    setDummy()
    {
        // this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshNormalMaterial()
        )
        this.scene.add(this.cube)
        
        this.cubeBody = new CANNON.Body({
            mass: 5,
            shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
        })
        this.cubeBody.position.set(0, 10, 0)
        this.physicsWorld.addBody(this.cubeBody)        
    }

    resize()
    {
    }

    update()
    {
        if(this.cubeBody){
            this.cube.position.copy(this.cubeBody.position)
            this.cube.quaternion.copy(this.cubeBody.quaternion)
        }
    }

    destroy()
    {
    }
}
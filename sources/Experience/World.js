import * as THREE from 'three'
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
        
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshNormalMaterial()
        )
        this.scene.add(cube)        
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}
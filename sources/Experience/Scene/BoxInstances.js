import Experience from "../Experience";
import * as CANNON from 'cannon-es'
import * as THREE from 'three'

export default class BoxInstances{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.world = this.experience.physics.world
        this.world.solver.tolerance = 0.001
        this.setBoxes()
        this.update()
    }

    setBoxes()
    {
        this.numberOfBoxes = 50
        this.bodies = []

        const boxShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))

        
    }

    update()
    {

    }
}
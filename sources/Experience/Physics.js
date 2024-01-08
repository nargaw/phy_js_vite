import * as CANNON from 'cannon-es'

export default class Physics
{
    constructor()
    {
        this.setPhysics()
        this.updatePhysics()
    }

    setPhysics()
    {
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -9.82, 0)
        })
        console.log('here')
    }

    updatePhysics()
    {
        this.world.fixedStep()
    }
}
import Experience from './Experience'
import CannonDebugger from 'cannon-es-debugger'

export default class PhysicsDebugger
{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.world = this.experience.physics.world
        this.setDebugger()
    }

    setDebugger(){
        this.cannonDebugger = new CannonDebugger(this.scene, this.world, {
            color: 0x00ff00
        })
    }

    update(){
        this.cannonDebugger.update()
    }
}
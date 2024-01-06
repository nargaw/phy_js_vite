import Experience from "./Experience";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import * as THREE from 'three'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.setEnv()
    }

    setEnv()
    {
        this.rgbeLoader = new RGBELoader()
        this.rgbeLoader.load('/environmentMaps/1/puresky_2k.hdr', (env) => {
            env.mapping = THREE.EquirectangularReflectionMapping
            this.scene.background = env
            this.scene.environment = env
        })
    }
}
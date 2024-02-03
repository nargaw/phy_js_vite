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
        this.setLights()
    }

    setEnv()
    {
        this.rgbeLoader = new RGBELoader()
        this.rgbeLoader.load('/environmentMaps/1/puresky_2k.hdr', (env) => {
            env.mapping = THREE.EquirectangularReflectionMapping
            // this.scene.background = env
            // this.scene.environment = env
        })
    }

    setLights()
    {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        this.pointLight = new THREE.PointLight(0xff0000, 10.85)
        this.scene.add(this.ambientLight, this.pointLight)
        this.pointLight.position.set(5, 5, 0)
    }
}
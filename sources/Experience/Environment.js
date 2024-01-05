import Experience from "./Experience";
import { CubeTextureLoader } from "three";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug()
        this.setEnv()
    }

    setEnv()
    {
        this.cubeLoader = new CubeTextureLoader()
        this.r = '/environmentMaps/1/'
        this.urls = [
            '/environmentMaps/1/px.png',
            '/environmentMaps/1/nx.png',
            '/environmentMaps/1/py.png',
            '/environmentMaps/1/ny.png',
            '/environmentMaps/1/pz.png',
            '/environmentMaps/1/nz.png',
        ]
        this.environmentMap = this.cubeLoader.load(this.urls)
        this.scene.background = this.environmentMap
        this.scene.environment = this.environmentMap
        this.scene.backgroundBlurriness = 1

        if(this.debug)
        {
            console.log(this.debug)
            this.debug.add(this.scene, 'backgroundBlurriness').min(0).max(1).step(0.001)
            this.debug.add(this.scene, 'backgroundIntensity').min(0).max(10).step(0.001)
        }
    }
}
import {useState} from 'react'
import imgUn from '../img/un.png'
import imgDeux from '../img/deux.png'
import imgTrois from '../img/trois.png'
import imgQuatre from '../img/quatre.png'

import './Projects.css'

const Projects = () => {
    const xUniverse = 'https://pedantic-cori-74f717.netlify.app/'
    const greenPeas = 'https://eager-wright-9ec40d.netlify.app/'
    const futuriste = 'https://zen-bardeen-9e375b.netlify.app'
    return(
        <div className='allProjects'>
            <div className='projet' id='inProgress' onClick={() => alert('Ce projet est en cours, patience ..')}><img className='picProject' src={imgQuatre} alt='some guy website'></img></div>
            <div className='projet'><a href={xUniverse} target='blank'><img className='picProject' src={imgTrois} alt='some guy website'></img></a></div>
            <div className='projet'><a href={greenPeas} target='blank'><img className='picProject' src={imgDeux} alt='some guy website'></img></a></div>
            <div className='projet'><a href={futuriste} target='blank'><img className='picProject' src={imgUn} alt='some guy website'></img></a></div>
        </div>
    )
}

export default Projects
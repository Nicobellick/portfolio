import {useState} from 'react';
import pictureMe from '../img/boss.png'

import './Home.css'

const Home = (prevProps) => {
    const {setProject, setSkill} = prevProps
   const handleChangeSkills = () => {
    setSkill(true) 
    setProject(false)
   }
   const handleChangeProjects = () => {
       setSkill(false)
       setProject(true)
   }
    return(
        <div>
            <div className='containMe'>
                <div id='me'><img src={pictureMe} id='pictureMe'></img></div>
                <div id='description'>
                    <h3 className='mainTitle'>Nicolas Soumier ,</h3>
                    <h4 className='subtitle'>Développeur Front End.</h4>
                    <p className='textAboutMe'>Passionné par l'informatique depuis toujours, je suis actuellement en formation à la Wild Code School</p>
                    <p className='textAboutMe'>Je suis formé principalement sur du <strong>React</strong>, <strong>Node.JS</strong> et <strong>Javascript</strong> mais je suis ouvert à l'idée d'apprendre de nouveaux langages</p>
                    <p className='textAboutMe'>Dotée d'une personnalitée et d'un parcours peu commun, voici mon portfolio.</p>
                </div>
            </div>
            <div id='containSkill'>    
                <div className='skillPro'>
                    <p onClick={() => handleChangeSkills()}id='skills' className='choice' >SKILLS</p>
                    <p onClick={() => handleChangeProjects()} className='choice'>PROJETS</p>
                </div>         
            </div>
        </div>
    )
}

export default Home
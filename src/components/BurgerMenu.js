import {useState} from 'react'

import linkedin from '../img/linkedin.png'
import github from '../img/github.png'

import './BurgerMenu.css'

const BurgerMenu = prevProps => {
    const [openContact, setOpenContact] = useState(false)
    const [openProjects, setOpenProjects] = useState(false)
    const myGithub = 'https://github.com/Nicobellick/'
 
    
  return (   
     <div id='menuPage' className={prevProps.burgerContent}>
         <nav className='menuContent'>
         <ul className='menuList'>
         <a href='https://www.linkedin.com/in/nicolas-soumier-35b1a3196/' target='blank'><li className='btnNav linkedin'> <img className='logoBtn' src={linkedin} alt =''/>Linkedin </li></a>
             <a href='https://github.com/Nicobellick/' target='blank'><li className='btnNav github'><img className='logoBtn' src={github} alt =''/>Github </li></a>
             <li onClick={()=> {
                 setOpenContact(!openContact)
                 setOpenProjects(false)
                 }} className={openContact ? 'btnNavSelected contact' : 'btnNav contact'}>Contact</li>
             {openContact ? (<ul className='contactList'>
                 <li>Telephone : 06 14 90 13 52</li>
                 <li>Mail : nicolas.soumier@gmail.com</li> 
             </ul>) : null}
             <li onClick={()=>{ 
                 setOpenProjects(!openProjects)
                 setOpenContact(false)
                 }} className={openProjects ? 'btnNavSelected projectBtn':'btnNav projectBtn'}>Mes Projets </li>
             {openProjects ? (
                 <ul className='projectsList'>
                     <li>LES FUTURISTES</li>
                     <li>GREEN PEAS</li>
                     <li>X-UNIVERSE</li>
                     <li>MINIMAL</li>
                 </ul>
             ): null}
         </ul>
         </nav>
     </div>
    
  )
}

export default BurgerMenu
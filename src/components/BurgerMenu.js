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
                     <li><a className='linky' href='https://github.com/Nicobellick/projectFuturiste' target='blank'>LES FUTURISTES</a></li>
                     <li><a className='linky' href='https://github.com/Nicobellick/remote-js-202011-green-peas' target='blank'>GREEN PEAS</a></li>
                     <li><a className='linky' href='https://github.com/Nicobellick/hackaton1' target='blank'>X-UNIVERSE</a></li>
                     <li><a className='linky' onClick={() => alert('Toujours en cours ..')}>MINIMAL</a></li>
                 </ul>
             ): null}
         </ul>
         </nav>
     </div>
    
  )
}

export default BurgerMenu
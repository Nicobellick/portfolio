import './Skills.css'
import logoReact from '../img/iconReact.png'
import logoJS from '../img/iconJS.png'
import logoWP from '../img/wordpress.png'
import logoHtml from '../img/iconHTML.png'
import logoSql from '../img/mysql.png'
import logoGit from '../img/git.png'
import logoTrello from '../img/trello.png'
import logoDocker from '../img/docker.png'
import logoFigma from '../img/figma.png'
import logoShop from '../img/shop.png'

const Skills = (prevProps) => {
  
    return(
        <div className='containSkills'>
            
            <div id='hardSkill'>
                <div className='skillsList'>
                <h3>Frameworks :</h3>
                <ul>
                    <li className='skillsLogo'><img className='skillsImg' src={logoReact} alt=''/>React</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoWP} alt=''/>WordPress</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoShop} alt=''/>Shopify</li>
                </ul>
                </div>
                <div className='skillsList'>
                <h3>Languages :</h3>
                <ul>
                    <li className='skillsLogo'><img className='skillsImg' src={logoJS} alt=''/>Javascript</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoHtml} alt=''/>Html/Css</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoSql} alt=''/>MySql</li>
                </ul>
                </div>
                <div className='skillsList'>
                <h3>Outils :</h3>
                <ul>
                    <li className='skillsLogo'><img className='skillsImg' src={logoGit} alt=''/>Git</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoTrello} alt=''/>Trello</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoDocker} alt=''/>Docker</li>
                    <li className='skillsLogo'><img className='skillsImg' src={logoFigma} alt=''/>Figma</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
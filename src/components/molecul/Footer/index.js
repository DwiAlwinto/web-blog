import React from 'react'
import './footer.scss'
import { IcGithub, IcInstagram, IcPf, IcTelegram, IcWhatsApp, LogoAlwin } from '../../../assets'

const Icon = ({img}) =>{
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon'/>
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={LogoAlwin} alt='LogoAlwin' />
            </div>
            <div className='social-wrapper'>
                <Icon img={IcInstagram} href="https://instagram.com/alwiin_?igshid=MzRlODBiNWFlZA==" />
                <Icon img={IcGithub}/>
                <Icon img={IcPf}/>
                <Icon img={IcTelegram}/>
                <Icon img={IcWhatsApp}/>

            </div>
        </div> 
        <div className='copyright'>
             <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer

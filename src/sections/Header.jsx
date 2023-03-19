import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/Header'
import { headerData } from '../Moks/data'
import pic from '../assets/images/image.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <Wrapper id='header'>
      <div className='container header__container'>
        <div
          className='header__profile aos-init aos-animate'
          data-aos='zoom-in'
        >
          <img src={pic} alt='Header Portait' />
        </div>
        <h3 data-aos='fade-up' className='aos-init'>
          Jean RABEMANALINA
        </h3>
        <p data-aos='fade-up' className='aos-init'>
        Vous souhaitez créer un site Web ou une app Web de vos rêves. Un site ou application web moderne, responsive, statique ou vitrine. Envoyez-moi les détails de votre projet en me contactant via le contact sur mon CV.
        </p>
        <div className='header__cta aos-init' data-aos='fade-up'>
          <a href='#contact' className='btn primary'>
            Pour me contacter
          </a>
          <a href='#portfolio' className='btn light'>
            Portfolio
          </a>
        </div>
        <div className='header__socials'>
          {headerData.map((item) => {
            const { id, link, icon } = item
            return (
              <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Header

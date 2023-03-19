import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { headerData } from '../Moks/data'
const Footer = () => {
  return (
    <Wrapper>
      <div className='container footer__container'>
        <div className='footer__socials'>
          {headerData.map((social) => {
            const { id, link, icon } = social
            return (
              <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      <div className='footer__copyright'>
        <small>© Jean RABEMANALINA 2023</small>
      </div>
    </Wrapper>
  )
}

export default Footer

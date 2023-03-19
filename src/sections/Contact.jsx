import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { contactData } from '../Moks/data'
const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h2>Pour me contacter</h2>
      <p>Envoyez moi un message via l'un des liens ci-dessous!</p>
      <div className='container contact__container'>
        {contactData.map((item) => {
          const { id, icon, link } = item
          return (
            <a key={id} href={link} target='_blank' rel='noopener noreferrer'>
              {icon}
            </a>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Contact

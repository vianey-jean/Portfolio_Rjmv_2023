import React from 'react'
import Wrapper from '../assets/wrappers/Services'
import { servicesData } from '../Moks/data'
import Card from '../components/Card'
const Services = () => {
  return (
    <Wrapper id='services'>
      <h2>Experiences</h2>
      <p>Je vous donne le meilleur dans tous mes experiences ci-dessous</p>
      <div className='container services__container ' data-aos='fade-up'>
        {servicesData.map((service) => {
          const { id, title, icon, desc } = service
          return (
            <Card key={id} className='service light'>
              <div className='service__icon'>{icon}</div>
              <div className='service__details'>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Services

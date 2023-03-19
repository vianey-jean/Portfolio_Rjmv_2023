import React from 'react'
import Wrapper from '../assets/wrappers/Apropos'
import developerImage from '../assets/images/developer.jpg'
import { aproposData } from '../Moks/data'
import pdf from '../assets/CV_Jean_Rabemanalina.pdf'
import Card from '../components/Card'

const Apropos = () => {
  return (
    <Wrapper id='apropos'>
      <div className='container apropos__container'>
        <div className='apropos__left'>
          <div className='apropos__portrait'>
            <img src={developerImage} alt='developer' />
          </div>
        </div>
        <div className='apropos__right'>
          <h2>A propos de moi</h2>
          <div className='apropos__cards'>
            {aproposData.map((item) => {
              const { id, title, icon, desc } = item
              return (
                <Card key={id} className='apropos__card'>
                  <span className='apropos__card-icon'>{icon}</span>
                  <h5>{title}</h5>
                  <small>{desc}</small>
                </Card>
              )
            })}
            <article className='card apropos__card'></article>
          </div>
          <p>
          Développeur front-end créatif, autonome et passionné avec 
          de solides expériences dans la création de sites web . 
          Titulaires d’un bac+3/4 professionnelles en développeur
          d'applications React avec OpenClassRooms,
          </p>
          <p>
            <b>
              {' '}
              maîtrisant parfaitement les langages
                HTML, CSS, jQuery, Javascript, 
                React ainsi que les bibliothèques de reporting 
                Javascript et de frameworks modernes.
            </b>{' '}
          </p>
          <p>
          L'utilisation efficace du temps, 
          la résolution de problèmes et 
          les techniques de communication 
          m'aident à adopter une attitude 
          positive dans des situations complexes. 
          Et ma volonté d'apprendre s'adapte rapidement 
          à des situations changeantes. 
          Vérifier mon CV ci-dessous !
          </p>
          <a href={pdf} download className='btn primary'>
            Télécharger CV{' '}
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Apropos

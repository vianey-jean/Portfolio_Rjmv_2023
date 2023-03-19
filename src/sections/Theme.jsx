import React from 'react'

import BackgroundColor from '../components/BackgroundColor'
import Modal from '../components/Modal'
import PrimaryColor from '../components/PrimaryColor'
import { primaryColors } from '../Moks/data'
import { backgroundColors } from '../Moks/data'
const Theme = () => {
  return (
    <Modal className='theme__modal'>
      <h3>Personnalisez votre thème</h3>
      <small>Modifiez la couleur principale et d'arrière-plan selon vos préférences.</small>
      <div className='theme__primary-wrapper'>
        <h5>Couleur</h5>
        <div className='theme__primary-colors'>
          {primaryColors.map((color, index) => {
            return <PrimaryColor key={index} {...color} />
          })}
        </div>
      </div>
      <div className='theme__background-wrapper'>
        <h5>Couleur de Fond</h5>
        <div className='theme__background-colors'>
          {backgroundColors.map((bcg, index) => {
            return <BackgroundColor key={index} {...bcg} />
          })}
        </div>
      </div>
    </Modal>
  )
}

export default Theme

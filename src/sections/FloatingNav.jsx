import React from 'react'
import Scrollspy from 'react-scrollspy'
import Wrapper from '../assets/wrappers/FloatingNav'
import Nav from '../components/Nav'
import { floatingData } from '../Moks/data'

const FloatingNav = () => {
  return (
    <Wrapper>
      <Scrollspy
        offset={-350}
        className='scrollspy'
        items={['header', 'apropos', 'services', 'portfolio', 'contact']}
        currentClassName='active'
      >
        {floatingData.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </Wrapper>
  )
}

export default FloatingNav

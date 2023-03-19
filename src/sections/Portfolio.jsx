import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Portfolio'
import { Projects, ProjectsCategories } from '../components'
import { portfolioData } from '../Moks/data'
const Portfolio = () => {
  const [projects, setProjects] = useState(portfolioData)

  const findCategories = portfolioData.map((item) => item.category)

  const categories = ['all', ...new Set(findCategories)]

  const filterProject = (arg) => {
    if (arg === 'all') {
      setProjects(portfolioData)
      return
    }
    const filterItem = portfolioData.filter((item) => item.category === arg)
    setProjects(filterItem)
  }
  return (
    <Wrapper id='portfolio'>
      <h2>Projets récents</h2>
      <p>
      Découvrez certains de mes projets que j'ai récemment 
      réalisés. Utiliser les boutons pour basculer entre les différentes catégories.
      </p>
      <div className='container portfolio__container'>
        <ProjectsCategories
          categories={categories}
          handleProject={filterProject}
        />
        <Projects projects={projects} />
      </div>
    </Wrapper>
  )
}

export default Portfolio

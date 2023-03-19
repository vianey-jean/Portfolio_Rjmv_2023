import styled from 'styled-components'

const Wrapper = styled.section`
  .apropos__container {
    display: grid;
    grid-template-columns: 35% 53%;
    gap: 12%;
  }

  .apropos__portrait {
    height: fit-content;
    max-height: 40rem;
    border: 1rem solid var(--color-white);
    transition: var(--transition);
  }

  .apropos__portrait:hover {
    border-width: 0;
  }

  .apropos__cards {
    margin: 3rem 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .card.apropos__card {
    text-align: center;
  }

  .apropos__card-icon {
    font-size: 1.3rem;
    color: var(--color-black);
    border-radius: var(--border-radius-3);
    width: fit-content;
    margin-inline: auto;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    transition: var(--transition);
  }

  .card.apropos__card:hover .apropos__card-icon {
    background: var(--color-primary);
    color: var(--color-white);
  }

  .card.apropos__card h5 {
    margin: 1rem 0;
  }

  .apropos__right p {
    margin-bottom: 0.8rem;
  }

  .apropos__right .btn {
    margin-top: 2.5rem;
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    .apropos__left {
      display: none;
    }

    .apropos__container {
      grid-template-columns: 1fr;
    }

    .apropos__right h2 {
      text-align: center;
    }
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .apropos__cards {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .apropos__right .btn {
      margin-top: 2rem;
    }
  }
`

export default Wrapper

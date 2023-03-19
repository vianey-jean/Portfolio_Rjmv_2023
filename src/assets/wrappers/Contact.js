import styled from 'styled-components'

const Wrapper = styled.section`
  .contact__container {
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .contact__container a {
    width: 5rem;
    aspect-ratio: 1/1;
    color: white;
    background: var(--color-primary);
    display: grid;
    place-items: center;
    font-size: 2rem;
    border: 2px solid transparent;
    border-radius: var(--border-radius-1);
  }

  .contact__container a:hover {
    background: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-0.5rem);
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .contact__container {
      gap: 1.5rem;
    }
  }
`
export default Wrapper

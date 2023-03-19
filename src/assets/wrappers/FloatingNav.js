import styled from 'styled-components'

const Wrapper = styled.ul`
  display: none;

  /* MEDIA QUERIES (tablets and phones */
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    animation: animateFloatingNav 300ms ease forwards;

    @keyframes animateFloatingNav {
      from {
        opacity: 0;
        bottom: -5rem;
      }
      to {
        opacity: 1;
        bottom: 3rem;
      }
    }

    .scrollspy {
      display: flex;
      gap: 1rem;
      background: rgba(0, 0, 0, 0.4);
      padding: 0.8rem 1.5rem;
      border-radius: 3rem;
      backdrop-filter: blur(20px);
    }

    a {
      padding: 0.6rem;
      border-radius: 50%;
      font-size: 1.3rem;
      color: white;
      display: grid;
    }

    li.active a {
      background: var(--color-primary);
    }
  }
`

export default Wrapper

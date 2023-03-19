import styled from 'styled-components'

const Wrapper = styled.footer`
  background: var(--color-primary);
  padding-top: 1rem;
  box-shadow: 0 -1rem 1.5rem hsla(var(--primary-hue), 68%, 42%, 20%);
  transition: var(--transition);

  .nav__menu {
    justify-content: center;
  }
  a {
    color: var(--color-white) !important;
  }
  .footer__socials {
    width: fit-content;
    display: flex;
    gap: 1.5rem;
    margin: 1rem auto 2rem;
  }

  .footer__socials a {
    background: var(--color-black);
    color: var(--color-white) !important;
    padding: 0.6rem;
    border-radius: var(--border-radius-3);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
  }

  .footer__socials a:hover {
    opacity: 0.7;
    transform: translateY(-0.5rem);
  }

  .footer__copyright {
    color: white;
    text-align: center;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
  }
`

export default Wrapper

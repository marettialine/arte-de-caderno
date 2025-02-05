import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 3.125rem 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }

  z-index: 99;
`

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  position: relative;
  z-index: 999;

  width: 50%;

  color: ${(props) => props.theme['neutral-1']};

  h1 {
    font-size: 4.5rem;

    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 950px) {
    width: 70%;

    html {
      font-size: 87.5%;
    }
  }

  @media screen and (max-width: 625px) {
    width: 100%;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }

    html {
      font-size: 50%;
    }
  }
`

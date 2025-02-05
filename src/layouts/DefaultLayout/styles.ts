import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 85rem;
  /* height: calc(100vh - 10rem); */
  height: auto;
  margin: 3rem auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`

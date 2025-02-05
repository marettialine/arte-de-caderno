import styled from 'styled-components'

export const DrawContainter = styled.div`
  position: relative;

  &:not(.remove-link) {
    cursor: pointer;
  }

  &:hover div {
    opacity: 1;

    background-color: ${(props) => props.theme.shade};

    color: ${(props) => props.theme['neutral-1']};
  }
`

export const DrawImg = styled.img`
  --webkit-transition: all 350ms ease;
  transition: all 350ms ease;

  width: 100%;

  margin-bottom: 2rem;

  /* &:hover{
    filter: opacity(0.7);
  } */
`

export const DrawInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  opacity: 0;

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: calc(100% - 2rem);

  transition: all 0.3s;

  p {
    width: 90%;
    text-align: center;
    font-size: 0.9rem;
  }

  .author {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;
  }
`

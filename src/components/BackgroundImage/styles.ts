import styled from 'styled-components'

import background from '../../assets/background.png'

export const BackgroundImageContainer = styled.div`
  background-image: url(${background});
  background-color: ${(props) => props.theme['neutral-2']};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  left: 0%;
  top: 0%;

  z-index: 0;
`

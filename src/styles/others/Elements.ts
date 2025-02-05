import styled from 'styled-components'

export const Shade = styled.div`
  z-index: 99;

  position: fixed;

  width: 100%;
  height: 100%;

  left: 0%;
  top: 0%;

  background-color: ${(props) => props.theme.shade};
`

import styled from 'styled-components'

const ButtonStyle = styled.button`
  color: ${(props) => props.theme['neutral-1']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.7rem 0;

  text-transform: uppercase;

  border-radius: 8px;

  border: 2px solid ${(props) => props.theme.primary};

  &:hover {
  }
`

export const Button = styled(ButtonStyle)`
  background-color: ${(props) => props.theme.primary};

  border-radius: 50px;

  height: 40px;

  padding: 0 1.5rem;

  &:hover {
    background-color: transparent;

    color: ${(props) => props.theme['neutral-1']};
  }
`

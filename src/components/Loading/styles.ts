import styled, { css, keyframes } from 'styled-components'

const fullWidth = keyframes`
  from {
    width: 2%;
  }
  to {
    width: 100%;
  }
`

export const LoadingContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .letter-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    position: relative;
  }
`

interface LetterProps {
  $isSpace: boolean
}

export const Letter = styled.span<LetterProps>`
  ${(props) =>
    props.$isSpace === true
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: ${(props) => props.theme['neutral-2']};
        `};

  color: ${(props) => props.theme['neutral-1']};

  text-transform: uppercase;

  padding: 1rem;

  border-radius: 8px;

  z-index: 1;
`

export const LetterBackground = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  left: 0;

  background-color: ${(props) => props.theme['neutral-2']};

  border-radius: 8px;

  z-index: 0;

  animation: ${fullWidth} 3s ease-in-out infinite;
`

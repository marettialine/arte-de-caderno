import { Letter, LetterBackground, LoadingContainer } from './styles'

export function Loading() {
  const title = 'Arte de Caderno'

  return (
    <LoadingContainer>
      <p>Carregando...</p>

      <div className="letter-container">
        <LetterBackground />
        {title.split('').map((letter, index) => (
          <Letter key={index} $isSpace={letter === ' '}>
            {letter}
          </Letter>
        ))}
      </div>
    </LoadingContainer>
  )
}

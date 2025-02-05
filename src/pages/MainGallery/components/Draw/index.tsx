import { DrawContainter, DrawImg, DrawInfo } from './styles'
import { DrawData } from '../../../../@types/draw'

interface DrawProps {
  draw: DrawData
}

export function Draw({ draw }: DrawProps) {
  return (
    <DrawContainter>
      <DrawImg src={draw.imgLink} />

      <DrawInfo>
        <p className="author">Feito por {draw.author}</p>
        {draw.authorAge && <p>{draw.authorAge}</p>}
        {draw.locale && <p>{draw.locale}</p>}
        {draw.school && <p>{draw.school}</p>}
      </DrawInfo>
    </DrawContainter>
  )
}

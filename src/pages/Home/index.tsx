import { NavLink } from 'react-router-dom'
import { BackgroundImage } from '../../components/BackgroundImage'
import { Button } from '../../styles/form/FormGlobalStyles'
import { HomeContainer, HomeMain } from './styles'

import { PiCursorClick } from 'react-icons/pi'

export function Home() {
  return (
    <HomeContainer>
      <BackgroundImage />

      <HomeMain>
        <h1>Galeria de Desenhos</h1>
        <p>
          Dê vida às páginas do Arte de Caderno, conheça nossos talentosos
          estudantes. Navegue pela nossa galeria de desenhos e mergulhe em um
          universo de cores, traços e imaginação!
        </p>

        <NavLink to="/galeria" title="Galeria">
          <Button>
            <PiCursorClick size={20} />
            Confira
          </Button>
        </NavLink>
      </HomeMain>
    </HomeContainer>
  )
}

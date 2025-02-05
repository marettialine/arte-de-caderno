import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  ButtonMenu,
  ButtonsHeader,
  HeaderContainer,
  LogoHeader,
  NavHeader,
} from './styles'
import { Button } from '../../../../styles/form/FormGlobalStyles'

import logo from '../../../../assets/logo.png'

import { User } from 'phosphor-react'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <LogoHeader className="logo mobile">
        <NavLink to="/" title="Início">
          <img src={logo} alt="" />
        </NavLink>
      </LogoHeader>

      <div className={isMobileMenuOpen ? `container` : `container desktop`}>
        <NavHeader>
          <NavLink to="/" title="Início">
            Início
            <hr />
          </NavLink>
          <NavLink to="/galeria" title="Galeria">
            Galeria
            <hr />
          </NavLink>
          <NavLink to="/sobre" title="Sobre">
            Sobre
            <hr />
          </NavLink>
        </NavHeader>

        <LogoHeader className="logo desktop">
          <NavLink to="/" title="Início">
            <img src={logo} alt="" />
          </NavLink>
        </LogoHeader>

        <ButtonsHeader>
          <NavLink to="/login" title="Login">
            <Button>
              <User size={20} /> Login
            </Button>
          </NavLink>
        </ButtonsHeader>
      </div>

      <ButtonMenu
        className="mobile"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <IoClose size={40} /> : <LuMenu size={40} />}
      </ButtonMenu>
    </HeaderContainer>
  )
}

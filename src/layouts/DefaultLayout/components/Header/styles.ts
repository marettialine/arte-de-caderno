import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0.3rem 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  background-color: ${(props) => props.theme['neutral-2']};

  position: relative;

  z-index: 999;

  .container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .mobile {
    display: none;
  }

  .mobile.logo {
    width: auto;
  }

  @media screen and (max-width: 1000px) {
    padding: 0.7rem 10%;

    justify-content: space-between;

    .mobile {
      display: flex;
    }

    .desktop {
      display: none;
    }

    .container {
      flex-direction: column;

      position: absolute;
      top: 5rem;
      right: 10%;

      gap: 0rem;

      background-color: ${(props) => props.theme['neutral-2']};

      padding: 2rem 0;

      border-radius: 16px;

      z-index: 9999999;
    }
  }
`

export const NavHeader = styled.nav`
  width: 30%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2.8125rem;

  a {
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme['neutral-1']};

    text-align: center;

    width: auto;

    hr {
      width: 0%;
      border: 1px solid ${(props) => props.theme['neutral-2']};
      transition: all 0.3s;
    }

    &:hover {
      hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme.primary};
      }
    }

    &.active {
      hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme.primary};
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 10rem;

    order: 2;

    flex-direction: column;
    gap: 0rem;

    a {
      padding: 0.5rem 0;
      width: 100%;

      hr {
        margin-top: 1rem;
      }

      &:focus {
        box-shadow: 0 0 0 0;
      }
    }
  }
`

export const LogoHeader = styled.div`
  background-color: white;

  width: 40%;

  padding: 0.5rem 0;

  text-align: center;

  border-radius: 0 0 70px 70px;

  a:focus {
    outline: 0;
    box-shadow: none;
  }

  img {
    width: 7rem;
  }

  @media screen and (max-width: 1000px) {
    order: 1;

    padding: 0.5rem;

    border-radius: 16px;
  }
`

export const ButtonsHeader = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    width: auto;

    order: 3;
  }
`

export const UserButtonHeader = styled.button`
  background-color: transparent;

  border: 0;
  border-radius: 8px;

  padding: 0.5rem;

  color: ${(props) => props.theme['neutral-1']};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    flex: 1;
    text-align: right;
  }
`

export const ButtonMenu = styled.button`
  color: ${(props) => props.theme['neutral-1']};

  order: 4;

  background-color: transparent;

  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`

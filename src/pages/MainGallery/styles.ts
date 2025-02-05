import styled from 'styled-components'

export const MainGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background-color: ${(props) => props.theme.primary};

    width: 50%;

    margin: 0 auto;
  }
`

export const GalleryItemsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0rem 0.5rem;

  &.main-gallery {
    margin-bottom: 3rem;
  }

  .column {
    flex: 1 1 20%; /* Cada coluna ocupa 25% da largura do contêiner */
    box-sizing: border-box;
  }

  @media screen and (max-width: 991px) {
    .column {
      flex: 1 1 50%; /* Quando a tela for menor, cada coluna ocupa 50% */
    }
  }

  @media screen and (max-width: 768px) {
    .column {
      flex: 1 1 100%; /* Para telas pequenas, cada coluna ocupa 100% */
    }
  }
`

export const GalleryMainContainer = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;

  position: relative;

  .year {
    padding: 1rem 0rem;

    width: 7rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.primary};

    border-radius: 30rem;

    font-weight: bold;

    font-size: 1.2rem;
    color: ${(props) => props.theme['neutral-1']};

    position: sticky;

    top: 3rem;
    left: 0rem;
    margin-bottom: 3rem;

    z-index: 1;
  }

  .dots {
    position: absolute;

    z-index: 0;

    top: 0;
    left: 3.5rem;

    height: calc(100% - 3rem);

    border: 1px dashed ${(props) => props.theme.primary};
  }
`

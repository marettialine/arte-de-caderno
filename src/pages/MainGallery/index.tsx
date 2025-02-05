import { useEffect, useState } from 'react'

import { Draw } from './components/Draw'

import {
  GalleryItemsContainer,
  GalleryMainContainer,
  MainGalleryContainer,
} from './styles'
import { SendFormButton } from '../../styles/form/FormGlobalStyles'

import { DrawData } from '../../@types/draw'
import { galleryRoutes } from '../../services/GalleryRoutes'
import { Loading } from '../../components/Loading'

export function MainGallery() {
  const [drawsList, setDrawsList] = useState<DrawData[]>([])

  const [groupedDraws, setGroupedDraws] = useState<Record<number, DrawData[]>>(
    {},
  )

  const [currentPage, setCurrentPage] = useState(1)

  const groupedDrawsTotalSize = groupedDraws
    ? Object.values(groupedDraws).flat().length
    : 0

  console.log(groupedDrawsTotalSize)

  const PAGE_SIZE = 15

  useEffect(() => {
    const draws = galleryRoutes.loadGallery().sort((a, b) => b.year - a.year)

    setDrawsList(draws)

    const drawsSliced = draws.slice(0, PAGE_SIZE)

    groupByYear(drawsSliced)
  }, [])

  function groupByYear(draws: DrawData[]) {
    const grouped = draws.reduce((acc: Record<number, DrawData[]>, draw) => {
      const year = draw.year

      if (year) {
        if (!acc[year]) {
          acc[year] = []
        }
        acc[year].push(draw)
      }

      return acc
    }, {})

    // Atualiza o estado com o grupo ordenado
    setGroupedDraws(grouped)
  }

  function handleLoadMoreDraws() {
    setCurrentPage((prevPage) => prevPage + 1)

    if (drawsList && drawsList.length > 0) {
      const nextPageDraws = drawsList.slice(0, (currentPage + 1) * PAGE_SIZE)

      groupByYear(nextPageDraws) // Agrupar as novas imagens da página
    }
  }

  function divideIntoColumns(array: DrawData[]) {
    const columns: DrawData[][] = [[], [], [], []] // 4 colunas

    array.forEach((item, index) => {
      columns[index % 4].push(item) // Distribui os itens nas colunas
    })

    return columns
  }

  return (
    <MainGalleryContainer>
      {drawsList.length > 0 ? (
        <>
          {groupedDraws &&
            Object.keys(groupedDraws)
              .reverse()
              .map((year) => {
                const drawsForYear = groupedDraws[Number(year)]

                return (
                  <GalleryMainContainer key={year}>
                    <span className="year">{Number(year)}</span>
                    <div className="dots"></div>
                    <GalleryItemsContainer className="main-gallery">
                      {divideIntoColumns(drawsForYear).map(
                        (column, columnIndex) => (
                          <div key={columnIndex} className="column">
                            {column.map((draw, index) => (
                              <Draw draw={draw} key={index} />
                            ))}
                          </div>
                        ),
                      )}
                    </GalleryItemsContainer>
                  </GalleryMainContainer>
                )
              })}

          {groupedDrawsTotalSize < drawsList.length && (
            <SendFormButton onClick={handleLoadMoreDraws}>
              Carregar mais desenhos
            </SendFormButton>
          )}
        </>
      ) : (
        <Loading />
      )}
    </MainGalleryContainer>
  )
}

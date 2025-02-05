export const galleryService = {
  loadGallery: function () {
    const images = import.meta.glob<Record<string, { default: string }>>(
      '../assets/main_gallery/**/*.{png,jpg,jpeg,svg}',
      { eager: true },
    )

    const imagePaths = Object.values(images).map((module) => {
      return module.default
    })

    const allDraws = imagePaths.map((path, index) => {
      const decodedPath = decodeURIComponent(String(path))

      const imageName = decodedPath
        .split('/')
        [decodedPath.split('/').length - 1].split('?')[0]
        .slice(0, -4)

      const imageInfos = imageName.split('_')

      const author = imageInfos[0]

      let city
      let school
      let authorAge

      for (let i = 1; i < imageInfos.length; i++) {
        const string = imageInfos[i]

        if (string.includes('Cidade')) {
          city = string
        } else if (string.includes('anos')) {
          authorAge = string
        } else if (string.includes('Escola')) {
          school = string
        }
      }

      const number = imageName.slice(-3)

      const yearMatch = decodedPath.match(/main_gallery\/(\d{4})\//)
      const year = yearMatch ? parseInt(yearMatch[1], 10) : 0

      const categoryMatch = decodedPath.match(/main_gallery\/\d{4}\/([^/]+)\//)
      const category = categoryMatch ? categoryMatch[1] : ''

      const draw = {
        id: `${year}-${index + 1}`,
        imgLink: String(path),
        title: `Desenho ${number}`,
        category,
        author,
        locale: city,
        year,
        authorAge,
        school,
      }

      return draw
    })

    console.log(allDraws)

    return allDraws
  },
}

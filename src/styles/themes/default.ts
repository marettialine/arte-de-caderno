export const defaultTheme = {
  'neutral-1': '#FFF',
  'neutral-2': '#000',

  'gray-50': '#F5F5F5',
  'gray-70': '#ECECEC',
  'gray-100': '#D7D7D7',
  'gray-200': '#BBBBBB',
  'gray-300': '#9E9D9F',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-850': '#1E1E1E',
  'gray-900': '#121214',

  'green-100': '#68a16e',
  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'blue-700': '#151a47',

  'yellow-500': '#FBA94C',

  'orange-100': '#EDA9A4',
  'orange-500': '#FF5440',
  'orange-500-opacity': 'rgb(255, 84, 64, 0.4)',

  primary: '',
  'primary-lighter': '',
  'primary-opacity': '',

  shade: 'rgba(0, 0, 0, 0.85)',
}

defaultTheme.primary = defaultTheme['orange-500']
defaultTheme['primary-lighter'] = defaultTheme['orange-100']
defaultTheme['primary-opacity'] = defaultTheme['orange-500-opacity']

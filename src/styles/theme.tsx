import { Indie_Flower } from 'next/font/google';
import { Montserrat } from 'next/font/google'
import { Sanchez } from 'next/font/google'

export const colors = {
	primary: '#0B7A5C',
	primaryLight: '#029973',
	secondary: '#edae49',
	white: '#FFFBFC',
	error: '#890620',
	lightGrey: '#cdcdcd',
	grey: '#555b6e',
	dark: '#313e50',
	black: '#000000',
}

const indieFlower = Indie_Flower({ weight: "400", subsets: ['latin'] });
const montserrat = Montserrat({ weight: "400", subsets: ['latin'] })
const sanchez = Sanchez({ weight: "400", subsets: ['latin'] })

export const fonts = {
	indieFlower,
	montserrat,
	sanchez
}

export enum ColorTypes {
	Primary = 'primary',
	PrimaryLight = 'primaryLight',
	Secondary = 'secondary',
	White = 'white',
	Error = 'error',
	LightGrey = 'lightGrey',
	Grey = 'grey',
	Dark = 'dark',
	Black = 'black'
}

export enum SizeTypes {
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
	Huge = 'huge'
}

export const dimensions = {
	small: 8,
	medium: 12,
	large: 24,
	huge: 48
}

const theme = {
	colors,
	fonts,
	dimensions
}

export default theme;

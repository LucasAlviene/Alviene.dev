import type { languageAvailable } from "../components/languages";
import { Timestamp} from 'firebase/firestore';
export interface iInvertedColor {
    $inverted?: boolean
}
export interface iTheme {
    background?: string
    primary?: string
    secondary?: string
    text?: string
    textPrimary?: string
}
export interface iContainer {
    style: any
    children: any
}

export interface iColumn{
    $width?: number
}
export interface iJobProps{
    id?: string
    image?: string
    name: string
    role: string
    languages: languageAvailable[]
    description: string
    date_start: Timestamp
    date_end?: Timestamp
    isProfessional: boolean 
}
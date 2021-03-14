import { ReactNode } from 'react'

export type CategoryViewProps = {
  children?: ReactNode
  category: CategoryProps
}

export interface CategoryProps {
  id: string
  title: string
  movies: Movie[]
}

export interface Movie {
  id: string
  poster: string
}

import { ReactNode } from 'react'

export type VideoPlayerProps = {
  children?: ReactNode
  episode: EpisodeProps
}

export interface EpisodeProps {
  id: string
  title: string
  poster: string
  duration: string
  plot: string
  video: string
}

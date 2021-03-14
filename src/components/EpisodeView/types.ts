import { Dispatch, ReactNode, SetStateAction } from 'react'

export type EpisodeViewProps = {
  children?: ReactNode
  episode: EpisodeProps
  onPress: Dispatch<SetStateAction<EpisodeProps>>
}

export interface EpisodeProps {
  id: string
  title: string
  poster: string
  duration: string
  plot: string
  video: string
}

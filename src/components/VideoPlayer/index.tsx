import React, { useEffect, useRef, useState } from 'react'
import { VideoPlayerProps } from './types'
import * as S from './styles'

const VideoPlayer = (props: VideoPlayerProps) => {
  const {
    episode: { title, poster, duration, plot, video },
  } = props

  const [status, setStatus] = useState({} as any)
  const videoRef = useRef<any>(null)

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      await videoRef?.current.unloadAsync()
      await videoRef?.current.loadAsync({ uri: video }, {}, false)
    })()
  }, [video])

  return (
    <S.Container>
      <S.StyledVideo
        ref={videoRef}
        source={{ uri: video }}
        posterSource={{ uri: poster }}
        usePoster
        posterStyle={{ resizeMode: 'cover' }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={s => setStatus(() => s)}
      />
    </S.Container>
  )
}

export default VideoPlayer

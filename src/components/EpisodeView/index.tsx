import React from 'react'

import { EpisodeViewProps } from './types'
import * as S from './styles'

const EpisodeView = (props: EpisodeViewProps) => {
  const {
    episode: { title, poster, duration, plot },
    onPress,
  } = props
  return (
    <S.Container onPress={() => onPress(props.episode)} rippleColor="#ffffff10">
      <S.Row>
        <S.Poster resizeMode="cover" source={{ uri: poster }} />
        <S.InfoView>
          <S.Title>{title}</S.Title>
          <S.DurationText>{duration}</S.DurationText>
        </S.InfoView>
        <S.Borderless rippleColor="gray">
          <S.Icon name="download" size={22} />
        </S.Borderless>
      </S.Row>
      <S.PlotText>{plot}</S.PlotText>
    </S.Container>
  )
}

export default EpisodeView

import React, { useMemo, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { FlatList } from 'react-native'
import { movie } from '../../data'
import * as C from '../../components'

import { MovieDetailsProps } from './types'
import * as S from './styles'

const MovieDetails = (props: MovieDetailsProps) => {
  const {
    seasons,
    title,
    contentRating,
    match,
    numberOfSeasons,
    maxResolution,
    year,
    plot,
    creator,
    cast,
  } = movie
  const [selectedSeason, setSelectedSeason] = useState(seasons[0])
  const [selectedEpisode, setSelectedEpisode] = useState(seasons[0].episodes[0])

  const formattedNumberOfSeasons = useMemo(() => {
    const s = numberOfSeasons > 1 ? 's' : ''
    return `${numberOfSeasons} season${s}`
  }, [numberOfSeasons])

  return (
    <S.Container>
      {/* <S.Poster resizeMode="cover" source={{ uri: selectedEpisode.poster }} /> */}
      <C.VideoPlayer episode={selectedEpisode} />
      <FlatList
        data={selectedSeason.episodes}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 240 }}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item: episode }) => (
          <C.EpisodeView episode={episode} onPress={setSelectedEpisode} />
        )}
        ListHeaderComponent={
          <S.InfoView>
            <S.Title>{title}</S.Title>
            <S.Row>
              <S.MatchText>{match}</S.MatchText>
              <S.InfosText>{year}</S.InfosText>
              <S.RatingView>
                <S.ContentRating>{contentRating}</S.ContentRating>
              </S.RatingView>
              <S.InfosText>{formattedNumberOfSeasons}</S.InfosText>
              <S.OutlineView>
                <S.MaxResolution>{maxResolution}</S.MaxResolution>
              </S.OutlineView>
            </S.Row>

            <C.Button
              variant="primary"
              onPress={() => true}
              label="Play"
              icon="play"
              leftIcon
              rippleColor="white"
            />
            <C.Button
              onPress={() => true}
              label="Download"
              icon="download"
              leftIcon
              rippleColor="white"
            />

            <S.PlotText>{plot}</S.PlotText>
            <S.InfosText>{`Creator: ${creator}`}</S.InfosText>
            <S.InfosText>{`Cast: ${cast}`}</S.InfosText>
            <S.Row>
              <S.IconView>
                <S.Icon name="plus" size={30} />
                <S.IconLabel>My List</S.IconLabel>
              </S.IconView>
              <S.IconView>
                <S.Icon name="staro" size={30} />
                <S.IconLabel>Rate</S.IconLabel>
              </S.IconView>
              <S.IconView>
                <S.Icon name="sharealt" size={30} />
                <S.IconLabel>Share</S.IconLabel>
              </S.IconView>
            </S.Row>
            <Picker
              mode="dropdown"
              dropdownIconColor="white"
              style={{ color: 'white', width: '50%' }}
              selectedValue={selectedSeason.name}
              onValueChange={(_, itemIndex) =>
                setSelectedSeason(seasons[itemIndex])
              }
            >
              {seasons.map(({ id, name }) => (
                <Picker.Item key={id} label={name} value={name} />
              ))}
            </Picker>
          </S.InfoView>
        }
      />
    </S.Container>
  )
}

export default MovieDetails

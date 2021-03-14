import React, { useCallback } from 'react'

import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoryViewProps, Movie } from './types'
import * as S from './styles'

const CategoryView = (props: CategoryViewProps) => {
  const { category } = props
  const { navigate } = useNavigation()

  const navigateToDetails = useCallback(
    (movieId: string) => {
      navigate('MovieDetails', { id: movieId })
    },
    [navigate],
  )

  return (
    <S.Container>
      <S.Title>{category.title}</S.Title>
      <FlatList
        data={category.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Movie) => `${item.id}`}
        renderItem={({ item: { poster, id } }) => (
          <S.Ripple
            onPress={() => navigateToDetails(id)}
            rippleColor="#ffffff80"
          >
            <S.Poster resizeMode="cover" source={{ uri: poster }} />
          </S.Ripple>
        )}
      />
    </S.Container>
  )
}

export default CategoryView

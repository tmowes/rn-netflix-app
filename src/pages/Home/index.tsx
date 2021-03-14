import React from 'react'
import { ScrollView } from 'react-native'

import * as C from '../../components'
import { categories } from '../../data'

import { HomeProps } from './types'
import * as S from './styles'

const Home = (props: HomeProps) => {
  const { any } = props
  return (
    <S.Container>
      <ScrollView>
        {categories.map(category => (
          <C.CategoryView key={category.id} category={category} />
        ))}
      </ScrollView>
    </S.Container>
  )
}

export default Home

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'

import * as P from '../pages'
import type { HomeRoutesProps } from './types'

const { Navigator, Screen } = createStackNavigator<HomeRoutesProps>()

const HomeRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#15161E' },
    }}
  >
    <Screen name="Home" component={P.Home} />
    <Screen name="MovieDetails" component={P.MovieDetails} />
  </Navigator>
)

export default HomeRoutes

import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import type { AppRoutesProps } from './types'
import TabRoutes from './tab.routes'

const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()

const AppRoutes = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#15161E' },
      }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
    </Navigator>
  </>
)

export default AppRoutes

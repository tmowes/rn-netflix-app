import React from 'react'
import { StatusBar } from 'react-native'
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import * as P from '../pages'
import type { TabRoutesProps } from './types'
import HomeRoutes from './home.routes'

const { Navigator, Screen } = createBottomTabNavigator<TabRoutesProps>()

const TabRoutes = () => {
  const { colors } = useTheme()

  const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: colors.orange,
    inactiveTintColor: `${colors.foodWhiteIsh}99`,
    activeBackgroundColor: colors.shape,
    inactiveBackgroundColor: colors.shape,
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigator tabBarOptions={tabBarOptions}>
        <Screen
          name="HomeStack"
          component={HomeRoutes}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Comming"
          component={P.Comming}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="video-library" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Search"
          component={P.Search}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={24} color={color} />
            ),
          }}
        />
        <Screen
          name="Downloads"
          component={P.Downloads}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="download" size={24} color={color} />
            ),
          }}
        />
      </Navigator>
    </>
  )
}

export default TabRoutes

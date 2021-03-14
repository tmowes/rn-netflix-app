import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styled, { css, ThemeProvider } from 'styled-components/native'

import Routes from './routes'
import * as themes from './styles/themes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

const AppSrc = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default AppSrc

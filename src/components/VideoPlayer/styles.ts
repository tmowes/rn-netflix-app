import { Feather } from '@expo/vector-icons'
import { Video } from 'expo-av'
import { Dimensions } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

const { width: sWidth, height: sHeight } = Dimensions.get('screen')

const aspectRatio = (sWidth / 16) * 9

export const Container = styled.View`
  margin: 8px 16px 12px;
`

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
    font-size: 16px;
    font-weight: bold;
  `}
`

export const DurationText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_gray};
    font-size: 13px;
  `}
`
export const PlotText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
    font-size: 15px;
    margin-top: 4px;
  `}
`
export const Poster = styled.Image`
  height: 80px;
  width: 142px;
  border-radius: 4px;
`

export const InfoView = styled.View`
  justify-content: center;
  margin-left: 8px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Borderless = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
  `}
`

export const StyledVideo = styled(Video)`
  width: 100%;
  height: ${aspectRatio}px;
`

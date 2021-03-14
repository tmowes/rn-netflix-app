import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)``

export const VerticalScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
    font-size: 22px;
    font-weight: bold;
  `}
`
export const Poster = styled.Image`
  height: 192px;
  width: 100%;
`

export const InfoView = styled.View`
  padding: 8px 16px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const MatchText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_match};
    margin-right: 8px;
  `}
`

export const InfosText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_gray};
    font-weight: bold;
    margin-right: 8px;
  `}
`

export const RatingView = styled.View`
  background: yellow;
  border-radius: 4px;
  padding: 0 4px;
  margin-right: 8px;
`

export const ContentRating = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
    font-weight: bold;
  `}
`

export const OutlineView = styled.View`
  ${({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${colors.netflix_white};
    padding: 0 4px;
    margin-right: 8px;
    border-radius: 4px;
  `}
`

export const MaxResolution = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
    font-weight: bold;
  `}
`

export const PlotText = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
    margin: 16px 0;
  `}
`

export const IconView = styled.View`
  align-items: center;
  margin: 16px auto;
`

export const Icon = styled(AntDesign)`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_white};
  `}
`
export const IconLabel = styled.Text`
  ${({ theme: { colors } }) => css`
    color: ${colors.netflix_gray};
  `}
`

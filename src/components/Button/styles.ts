import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { VariantStyledProps } from './types'
import { variants, variantsText } from './variants'

// eslint-disable-next-line prettier/prettier
export const Container = styled(RectButton) <VariantStyledProps>`
  ${({ variant }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 4px;
    margin: 8px 0 0;
    height: 44px;
    width: 100%;
    ${variant && variants[variant]};
  `}
`

// eslint-disable-next-line prettier/prettier
export const Icon = styled(Feather) <VariantStyledProps>`
  ${({ variant }) => css`
    margin-right: 16px;
    ${variant && variantsText[variant]};
  `}
`

export const Label = styled.Text<VariantStyledProps>`
  ${({ variant }) => css`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0;
    ${variant && variantsText[variant]};
  `}
`

import { css } from 'styled-components'

export const variants = {
  primary: css`
    ${({ theme: { colors } }) => css`
      background: ${colors.orange};
    `}
  `,
  secondary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.signal};
    `}
  `,
  tertiary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
    `}
  `,
  cancel: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
    `}
  `,
}
export const variantsText = {
  primary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.black};
    `}
  `,
  secondary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
    `}
  `,
  tertiary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
    `}
  `,
  cancel: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
    `}
  `,
}

import React from 'react'

import * as S from './styles'

import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const { variant = 'default', label, icon, leftIcon, onPress, ...rest } = props
  return (
    <S.Container variant={variant} {...rest} onPress={onPress}>
      {leftIcon && icon && <S.Icon name={icon} size={20} variant={variant} />}
      <S.Label variant={variant}>{label}</S.Label>
      {!leftIcon && icon && <S.Icon name={icon} size={20} />}
    </S.Container>
  )
}

export default Button

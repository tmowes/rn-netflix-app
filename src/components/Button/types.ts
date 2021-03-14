import { Icon, IconProps } from '@expo/vector-icons/build/createIconSet'
import { RectButtonProperties } from 'react-native-gesture-handler'

export type ButtonProps = RectButtonProperties & {
  label: string
  variant?: Variants
  icon?: any
  isActive?: boolean
  leftIcon?: boolean
}

export type VariantStyledProps = {
  variant?: Variants
}

export type Variants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'cancel'
  | undefined

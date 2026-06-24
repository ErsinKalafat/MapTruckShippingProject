import type { TextStyle } from 'react-native';

import { colors } from './colors';

export const typography: Record<
  'title' | 'subtitle' | 'body' | 'label' | 'value' | 'caption',
  TextStyle
> = {
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textMuted,
  },
  body: {
    fontSize: 15,
    color: colors.text,
  },
  label: {
    fontSize: 14,
    color: colors.textMuted,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  caption: {
    fontSize: 12,
    color: colors.textMuted,
  },
};

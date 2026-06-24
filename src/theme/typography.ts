import type { TextStyle } from 'react-native';

import { colors } from './colors';

export const typography: Record<'body' | 'title', TextStyle> = {
  body: {
    fontSize: 16,
    color: colors.text,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
};

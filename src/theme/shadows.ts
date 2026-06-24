import type { ViewStyle } from 'react-native';

import { colors } from './colors';

// Hem iOS (shadow*) hem Android (elevation) için çapraz platform gölgeler.
export const shadows: Record<'card' | 'floating', ViewStyle> = {
    card: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 6,
    },
    floating: {
        shadowColor: colors.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
    },
};

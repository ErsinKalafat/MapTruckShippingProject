import { StyleSheet, type ViewStyle } from 'react-native';

import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    greeting: {
        ...typography.title,
        marginBottom: 12,
    },
    row: {
        ...typography.body,
        marginTop: 4,
    },
});

// Alt güvenli alana (insets.bottom) göre konumlanan yüzen kart.
export const containerStyle = (insetBottom: number): ViewStyle => ({
    position: 'absolute',
    bottom: insetBottom + 12,
    left: 12,
    right: 12,
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 16,
    elevation: 8,
});

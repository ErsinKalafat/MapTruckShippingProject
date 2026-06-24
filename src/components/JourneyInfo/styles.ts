import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';
import { shadows } from '../../theme/shadows';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    // Yolculuk bilgisini taşıyan yüzen kart.
    card: {
        backgroundColor: colors.surface,
        borderRadius: 20,
        padding: 20,
        ...shadows.card,
    },
    greeting: typography.title,
    subtitle: {
        ...typography.subtitle,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 14,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    label: typography.label,
    value: {
        ...typography.value,
        flexShrink: 1,
        marginLeft: 12,
        textAlign: 'right',
    },
    cost: {
        ...typography.value,
        color: colors.route,
        fontSize: 16,
    },
});

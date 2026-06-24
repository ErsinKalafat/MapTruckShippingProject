import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    // Yolculuk bilgisini taşıyan yüzen kart.
    card: {
        backgroundColor: colors.surface,
        padding: 16,
        borderRadius: 16,
        elevation: 8,
    },
    greeting: {
        ...typography.title,
        marginBottom: 12,
    },
    row: {
        ...typography.body,
        marginTop: 4,
    },
});

import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';
import { shadows } from '../../theme/shadows';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        gap: 10,
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        ...shadows.floating,
    },
    buttonText: {
        ...typography.title,
        color: colors.primary,
    },
});

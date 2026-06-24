import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';
import { shadows } from '../../theme/shadows';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    container: {
        zIndex: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.surface,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        ...shadows.floating,
    },
    buttonText: {
        ...typography.body,
        flexShrink: 1,
        marginRight: 8,
    },
    chevron: {
        ...typography.caption,
        color: colors.textMuted,
    },
    list: {
        position: 'absolute',
        top: 56,
        left: 0,
        right: 0,
        backgroundColor: colors.surface,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
        zIndex: 10,
        ...shadows.card,
    },
    item: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    itemText: typography.body,
});

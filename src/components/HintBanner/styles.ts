import { StyleSheet } from 'react-native';

import { colors, shadows, typography } from '@theme';

export const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toast: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        maxWidth: '85%',
        backgroundColor: colors.text,
        opacity: 0.85,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,
        ...shadows.card,
    },
    text: {
        ...typography.body,
        flexShrink: 1,
        color: colors.surface,
    },
    closeButton: {
        marginLeft: 12,
    },
    closeText: {
        ...typography.title,
        lineHeight: 20,
        color: colors.surface,
    },
});

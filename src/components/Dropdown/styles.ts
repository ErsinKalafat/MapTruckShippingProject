import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
    container: {
        zIndex: 10,
    },
    button: {
        backgroundColor: colors.surface,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: typography.body,
    list: {
        position: 'absolute',
        top: 52,
        left: 0,
        right: 0,
        backgroundColor: colors.surface,
        borderRadius: 8,
        elevation: 5,
        zIndex: 10,
    },
    item: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    itemText: typography.body,
});

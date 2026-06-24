import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        zIndex: 10,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
    },
    list: {
        position: 'absolute',
        top: 52,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5,
        zIndex: 10,
    },
    item: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
});

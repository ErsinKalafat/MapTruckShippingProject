import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 12,
        right: 12,
    },
    // Başlangıç dropdown'ı açıldığında alttaki Varış'ın üzerine binebilsin diye daha yüksek zIndex.
    origin: {
        zIndex: 20,
    },
    destination: {
        marginTop: 8,
        zIndex: 10,
    },
});

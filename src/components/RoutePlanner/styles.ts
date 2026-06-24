import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Başlangıç dropdown'ı açıldığında alttaki Varış'ın üzerine binebilsin diye daha yüksek zIndex.
    origin: {
        zIndex: 20,
    },
    destination: {
        marginTop: 8,
        zIndex: 10,
    },
});

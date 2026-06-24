import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { HINT_DURATION_MS } from '@constants';
import { styles } from './styles';
import type { HintBannerProps } from './types';

// Uygulama açıldığında/yenilendiğinde gösterilen yönlendirme bildirimi.
// Belirtilen süre sonunda veya çarpı butonuna basılınca kapanır.
function HintBanner({ message }: HintBannerProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), HINT_DURATION_MS);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <View style={styles.overlay} pointerEvents="box-none">
            <View style={styles.toast}>
                <Text style={styles.text}>{message}</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setVisible(false)}
                    hitSlop={8}
                >
                    <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HintBanner;

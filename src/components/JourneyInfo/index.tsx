import { Text, View } from 'react-native';

import { USER_NAME } from '../../constants';
import { withSafeAreaPanel } from '../../hocs/withSafeAreaPanel';
import { estimateDuration } from '../../utils/estimateDuration';
import { styles } from './styles';
import type { JourneyInfoProps } from './types';

// Haritanın üstünde, alt kısımda absolute duran yolculuk bilgisi alanı.
function JourneyInfo({ origin, destination }: JourneyInfoProps) {
    const duration =
        origin && destination ? estimateDuration(origin, destination) : '-';

    return (
        <View style={styles.card}>
            <Text style={styles.greeting}>Merhaba, {USER_NAME}</Text>
            <Text style={styles.row}>Kalkış: {origin?.name ?? '-'}</Text>
            <Text style={styles.row}>Varış: {destination?.name ?? '-'}</Text>
            <Text style={styles.row}>Tahmini süre: {duration}</Text>
        </View>
    );
}

// Alt güvenli alana yaslanan panel olarak dışa aktarılır.
export default withSafeAreaPanel(JourneyInfo, 'bottom');

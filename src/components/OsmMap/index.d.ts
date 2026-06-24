// Platforma göre index.ios.tsx veya index.android.tsx yüklenir.
// Bu dosya yalnızca TypeScript'in modülü çözebilmesi içindir.
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import type { OsmMapHandle, OsmMapProps } from './types';

declare const OsmMap: ForwardRefExoticComponent<
    OsmMapProps & RefAttributes<OsmMapHandle>
>;
export default OsmMap;

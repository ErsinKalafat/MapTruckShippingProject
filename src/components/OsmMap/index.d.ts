// Platforma göre index.ios.tsx veya index.android.tsx yüklenir.
// Bu dosya yalnızca TypeScript'in modülü çözebilmesi içindir.
import type { FC } from 'react';

import type { OsmMapProps } from './types';

declare const OsmMap: FC<OsmMapProps>;
export default OsmMap;

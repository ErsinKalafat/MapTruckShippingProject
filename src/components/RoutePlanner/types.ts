import type { Location } from '@app-types';

export type RoutePlannerProps = {
    origin: Location | null;
    destination: Location | null;
    onSelectOrigin: (location: Location) => void;
    onSelectDestination: (location: Location) => void;
};

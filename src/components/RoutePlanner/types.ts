import type { Location } from '../../types/location';

export type RoutePlannerProps = {
    origin: Location | null;
    destination: Location | null;
    onSelectOrigin: (location: Location) => void;
    onSelectDestination: (location: Location) => void;
};

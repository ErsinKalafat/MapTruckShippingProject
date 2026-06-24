import { PRICE_PER_KM } from '@constants';

// Mesafeye (metre) göre tahmini taşıma maliyetini TL olarak hesaplar.
export function estimateCost(distanceMeters: number): number {
    return Math.round((distanceMeters / 1000) * PRICE_PER_KM);
}

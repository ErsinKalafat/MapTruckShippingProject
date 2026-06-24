// Saniye cinsinden süreyi "X sa Y dk" / "Y dk" metnine çevirir.
export function formatDuration(seconds: number): string {
    const totalMinutes = Math.round(seconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours > 0 ? `${hours} sa ${minutes} dk` : `${minutes} dk`;
}

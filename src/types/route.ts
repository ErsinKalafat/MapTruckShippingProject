// OSRM/GeoJSON sırasıyla rota noktası: [boylam, enlem].
export type RoutePoint = [number, number];

// Rota sorgusunun sonucu: çizilecek noktalar + gerçek sürüş süresi (saniye).
export type RouteResult = {
    coordinates: RoutePoint[];
    durationSeconds: number;
};

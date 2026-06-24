This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Ekran Görüntüleri

Her görselde sol tarafta iOS (iPhone 17 Pro), sağ tarafta Android (Emulator) gösterilmektedir.

| Açılış & yönlendirme bildirimi | İstanbul → İzmir rotası | Fatih → Bayrampaşa rotası |
| :---: | :---: | :---: |
| ![Açılış ekranı](docs/screenshots/01-acilis.png) | ![İstanbul-İzmir rotası](docs/screenshots/02-istanbul-izmir.png) | ![Fatih-Bayrampaşa rotası](docs/screenshots/03-fatih-bayrampasa.png) |

# Harita Mimarisi

Bu proje, harita ekranını **hiçbir API anahtarı olmadan** çalışacak şekilde tasarlandı. Amaç, projeyi GitHub'da herkese açık paylaşırken depoya gizli anahtar koymak zorunda kalmamak. Aşağıdaki kararlar bu hedefe göre alındı.

### Neden OpenStreetMap?

Harita karoları (tiles) [OpenStreetMap](https://www.openstreetmap.org)'ten çekiliyor:

```
https://tile.openstreetmap.org/{z}/{x}/{y}.png
```

OpenStreetMap karoları ücretsiz ve anahtarsız erişilebilir. Böylece Google Maps veya Mapbox gibi servislerin gerektirdiği faturalandırma hesabına ve gizli API anahtarına ihtiyaç kalmıyor — depoda saklanması gereken bir sır yok.

### Neden `mapType="none"` (iOS)?

iOS tarafında `react-native-maps` kullanılıyor ve `mapType="none"` veriliyor. Bu, haritanın **kendi varsayılan karolarını çizmesini kapatır**. Yani Apple'ın temel haritası çizilmez; tuval boş kalır ve üzerine yalnızca bizim eklediğimiz OpenStreetMap karoları (`UrlTile`) döşenir. Sonuç: tamamen OSM tabanlı, tek kaynaklı temiz bir harita.

### Neden iOS'ta `react-native-maps` kullanabiliyoruz?

iOS'ta `react-native-maps` altyapı olarak **Apple MapKit** kullanır. Apple MapKit, uygulama imzasıyla (provisioning) çalıştığı için ayrı bir harita API anahtarı **gerektirmez**. Bu yüzden iOS'ta anahtar olmadan harita motorunu başlatıp üzerine OSM karolarını döşeyebiliyoruz.

### Neden Android'de `react-native-maps` yerine `@maplibre/maplibre-react-native`?

Android'de `react-native-maps`, altyapı olarak **Google Maps SDK** kullanır. Google Maps SDK, sadece OSM karolarını göstersek bile harita motorunu başlatmak için **geçerli bir Google API anahtarı zorunlu kılar**; anahtar geçersizse motor hiç çizim yapmaz ve OSM karoları da görünmez (logcat'te `Authorization failure` hatası alınır).

Anahtarsız kalmak istediğimiz için Android'de [`@maplibre/maplibre-react-native`](https://github.com/maplibre/maplibre-react-native)'e geçtik. MapLibre tamamen açık kaynaklı bir harita motorudur, Google'a bağlı değildir ve **hiçbir API anahtarı gerektirmez**. OSM karolarını doğrudan bir raster stil tanımıyla döşüyoruz.

### Platforma göre ayrım

İki kütüphane, autolinking düzeyinde platforma göre ayrıldı (`react-native.config.js`): iOS yalnızca `react-native-maps`, Android yalnızca `@maplibre/maplibre-react-native` derler. Bileşen tarafında Metro, platform uzantısına göre doğru dosyayı otomatik seçer:

```
src/components/OsmMap/
├── index.ios.tsx       # react-native-maps + OSM (Apple MapKit, anahtarsız)
├── index.android.tsx   # MapLibre + OSM (Google yok, anahtarsız)
├── index.d.ts          # ortak tip bildirimi
├── types.ts
└── styles.ts
```

Her iki platformda da sonuç aynıdır: boş tuval üzerinde yalnızca OpenStreetMap karoları, sıfır API anahtarı.

# Özellikler

- **Anahtarsız harita:** OpenStreetMap karoları ile iOS ve Android'de API anahtarı olmadan çalışır.
- **İki yöntemle nokta seçimi:** Dropdown menüden popüler şehir/ilçeleri seçebilir veya haritada herhangi bir yere **basılı tutarak** özel bir nokta belirleyebilirsiniz.
- **Adres çözümleme:** Haritadan seçilen noktanın adı [Nominatim](https://nominatim.openstreetmap.org) ile "İlçe, İl" biçiminde gösterilir.
- **Gerçek rota çizimi:** Başlangıç ve varış arasındaki sürüş rotası [OSRM](https://project-osrm.org) ile hesaplanır ve harita üzerine çizilir.
- **Yolculuk özeti:** Tahmini süre ve kilometre başına ücrete göre tahmini maliyet hesaplanır.
- **Otomatik odaklanma:** Rota geldiğinde harita iki noktayı da görecek şekilde otomatik uzaklaşır.
- **Yönlendirme bildirimi:** Uygulama açıldığında nasıl nokta seçileceğini anlatan, kapatılabilen bir bildirim gösterilir.

# Teknolojiler

- **React Native** (TypeScript)
- **react-native-maps** (iOS) ve **@maplibre/maplibre-react-native** (Android)
- **OpenStreetMap** (karolar), **Nominatim** (adres), **OSRM** (rota)
- **react-native-safe-area-context** (güvenli alan yerleşimi)

# Nasıl Çalıştırılır?

1. Bağımlılıkları kurun:

   ```sh
   npm ci
   ```

2. Metro paketleyiciyi başlatın:

   ```sh
   npm start
   ```

3. Yeni bir terminalde uygulamayı çalıştırın:

   ```sh
   # Android
   npm run android

   # iOS (ilk açılışta: bundle install && bundle exec pod install)
   npm run ios
   ```

Uygulama açıldığında dropdown'dan popüler noktaları seçin ya da haritaya basılı tutarak kendi başlangıç/varış noktanızı belirleyin; rota, süre ve tahmini maliyet otomatik olarak hesaplanır.

---

**Geliştiren: Ersin Kalafat**

---

# ENGLISH

This is a React Native project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Screenshots

In each image, iOS (iPhone 17 Pro) is on the left and Android (Emulator) is on the right.

| Launch & guidance notice | İstanbul → İzmir route | Fatih → Bayrampaşa route |
| :---: | :---: | :---: |
| ![Launch screen](docs/screenshots/01-acilis.png) | ![İstanbul-İzmir route](docs/screenshots/02-istanbul-izmir.png) | ![Fatih-Bayrampaşa route](docs/screenshots/03-fatih-bayrampasa.png) |

## Map Architecture

This project was designed so the map screen works **without any API key**. The goal is to share the project publicly on GitHub without committing any secret keys to the repository. The decisions below follow that goal.

### Why OpenStreetMap?

Map tiles are pulled from [OpenStreetMap](https://www.openstreetmap.org):

```
https://tile.openstreetmap.org/{z}/{x}/{y}.png
```

OpenStreetMap tiles are free and accessible without a key. This removes the need for the billing account and secret API key required by services like Google Maps or Mapbox — there is no secret to store in the repo.

### Why `mapType="none"` (iOS)?

On iOS, `react-native-maps` is used with `mapType="none"`. This **turns off the map's own default tiles**. Apple's base map is not drawn; the canvas stays empty and only the OpenStreetMap tiles we add (`UrlTile`) are laid on top. The result is a clean, single-source, fully OSM-based map.

### Why can we use `react-native-maps` on iOS?

On iOS, `react-native-maps` uses **Apple MapKit** under the hood. Apple MapKit works with the app's signing (provisioning), so it does **not require** a separate map API key. That is why we can start the map engine on iOS without a key and lay OSM tiles on top.

### Why `@maplibre/maplibre-react-native` instead of `react-native-maps` on Android?

On Android, `react-native-maps` uses **Google Maps SDK** under the hood. Even if we only display OSM tiles, the Google Maps SDK **requires a valid Google API key** just to start the map engine; if the key is invalid the engine draws nothing and the OSM tiles do not appear (you get an `Authorization failure` error in logcat).

Because we want to stay key-free, on Android we switched to [`@maplibre/maplibre-react-native`](https://github.com/maplibre/maplibre-react-native). MapLibre is a fully open-source map engine, not tied to Google, and **requires no API key**. We lay OSM tiles directly with a raster style definition.

### Platform separation

The two libraries are separated per platform at the autolinking level (`react-native.config.js`): iOS compiles only `react-native-maps`, Android compiles only `@maplibre/maplibre-react-native`. On the component side, Metro automatically selects the correct file based on the platform extension:

```
src/components/OsmMap/
├── index.ios.tsx       # react-native-maps + OSM (Apple MapKit, key-free)
├── index.android.tsx   # MapLibre + OSM (no Google, key-free)
├── index.d.ts          # shared type declaration
├── types.ts
└── styles.ts
```

On both platforms the result is the same: only OpenStreetMap tiles on an empty canvas, zero API keys.

## Features

- **Key-free map:** Works on iOS and Android without an API key using OpenStreetMap tiles.
- **Two ways to pick points:** Choose popular cities/districts from the dropdown menu, or **long-press** anywhere on the map to set a custom point.
- **Reverse geocoding:** The name of a point picked from the map is shown as "District, City" via [Nominatim](https://nominatim.openstreetmap.org).
- **Real route drawing:** The driving route between origin and destination is computed with [OSRM](https://project-osrm.org) and drawn on the map.
- **Trip summary:** Estimated duration and an estimated cost based on a per-kilometer price are calculated.
- **Auto focus:** When a route arrives, the map automatically zooms out to show both points.
- **Guidance notice:** On launch, a dismissible notice explains how to pick points.

## Technologies

- **React Native** (TypeScript)
- **react-native-maps** (iOS) and **@maplibre/maplibre-react-native** (Android)
- **OpenStreetMap** (tiles), **Nominatim** (addresses), **OSRM** (routing)
- **react-native-safe-area-context** (safe-area layout)

## How to Run

1. Install dependencies:

   ```sh
   npm ci
   ```

2. Start the Metro bundler:

   ```sh
   npm start
   ```

3. In a new terminal, run the app:

   ```sh
   # Android
   npm run android

   # iOS (first run: bundle install && bundle exec pod install)
   npm run ios
   ```

When the app opens, pick popular points from the dropdown or long-press the map to set your own origin/destination; the route, duration, and estimated cost are calculated automatically.

---

**Developed by: Ersin Kalafat**

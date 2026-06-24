This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

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

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 0: Install dependencies

This project pins every dependency to an exact version, and the resolved tree is locked in `package-lock.json`. To install the **exact same versions** that the project was built with, use `npm ci` (clean install from the lockfile) instead of `npm install`:

```sh
npm ci
```

> Use `npm ci` for reproducible installs. Only use `npm install` when you intentionally want to add or update a dependency.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

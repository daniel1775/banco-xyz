# Banco XYZ

This is a mobile application built with React Native and Expo.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo Go App](https://expo.dev/go) (Optional)
- [Android Studio](https://developer.android.com/studio) (Optional - For Android emulation)
- [Xcode](https://developer.apple.com/xcode/) (Optional - For iOS simulation, macOS only)

---

## 1. Initializing the Project

To get started, you need to install all the project dependencies. Open your terminal at the root of the project and run:

```bash
npm install
```

---

## 2. Running the Project

You have two ways to run this project: using **Expo Go** (the quickest and easiest way) or generating a local build connected to an emulator/simulator.

### 2.1. Using Expo Go (Recommended)

Start the development server by running:

```bash
npm start
```

This will display a QR code and a menu of options in your terminal. You can then choose how to open the app:

**On a physical device:**

- Install the **Expo Go** app from the [App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent).
- **Android**: Open the Expo Go app and tap "Scan QR Code".
- **iOS**: Open the default Camera app and scan the QR code; it will prompt you to open the project in Expo Go.

**On an emulator/simulator:**

- **Android**: Press `a` in the terminal to open the app in a running Android emulator.
- **iOS**: Press `i` in the terminal to open the app in the iOS Simulator.

### 2.2. Running on Android (Emulator)

Make sure you have an Android emulator running via Android Studio, or connect a physical Android device with USB debugging enabled. Then execute:

```bash
npm run android
```

### 2.3. Running on iOS (Simulator)

macOS operating system and Xcode are required. Then execute:

```bash
npm run ios
```

---

## 3. Running the Tests

This project uses Jest along with React Native Testing Library for unit testing. To run the complete test suite, execute:

```bash
npm run test
```

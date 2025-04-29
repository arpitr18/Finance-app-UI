## 📱 Spending Tracker App

A beautifully designed mobile application built with **React Native** that helps you track your monthly spending and visualize your expenses using categorized icons like Netflix, Uber, Amazon, Spotify, and more.

---

### 🧰 Tech Stack

- **React Native**
- **TypeScript**
- **Expo**
- **React Navigation**
- **React Native Vector Icons**
- **SVG Icons (via `react-native-svg`)**
- **Custom Components & Styling with StyleSheet**

---

### 📦 Dependencies

Below is the list of major dependencies used in this project:

| Package                                | Purpose                                           |
|----------------------------------------|---------------------------------------------------|
| `react-native`                         | Core framework for building native apps          |
| `react-native-svg`                     | Rendering custom SVG icons                       |
| `react-native-vector-icons`           | Vector icons (Feather, Ionicons, etc.)           |
| `expo`                                 | Expo framework to run and build the app          |
| `@react-navigation/native`            | App navigation handling                          |
| `@react-navigation/native-stack`      | Stack-based navigation                           |
| `typescript`                           | Type checking and cleaner development            |

Make sure you have these installed and configured properly (see below).

---

### 🚀 Getting Started

Follow these steps to clone, install, and run the project on your machine:

#### 1. 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

#### 2. 📦 Install Dependencies

Make sure you have Node.js and npm or yarn installed, then run:

```bash
npm install
# OR
yarn install
```

#### 3. ▶️ Run on Device or Emulator

##### Using Expo CLI:

If you have Expo CLI installed:

```bash
npx expo start
```

This will launch Expo DevTools in your browser. Use the QR code to run the app on your physical device (with Expo Go app) or emulator.

---

### 📁 Project Structure

```
.
├── assets/                 # SVG and image assets
├── components/             # Reusable UI components like SpendingBlock
├── constants/              # Theme colors and icons
├── types/                  # TypeScript type definitions
├── App.tsx                 # Entry point
└── ...
```

---

### 🎨 Features

- ✅ Displays a list of monthly spendings
- ✅ Categorized icons for popular services (Netflix, Uber, Amazon, Spotify)
- ✅ Beautiful UI with dark-themed styling
- ✅ Easily extensible for new services or features

---

### 🛠 Customize or Extend

You can easily add more spending categories by:

1. Importing the new SVG icon in `Icons.ts`
2. Adding a new condition inside `SpendingBlock.tsx` like:

```tsx
else if (item.name === "Zomato") {
  icon = <ZomatoIcon width={30} height={30} color={Colors.white} />;
}
```

---

### ❗Troubleshooting

- If you see `VirtualizedLists should never be nested inside plain ScrollViews` warning, make sure you're **not nesting** a `FlatList` inside a `ScrollView` with the same orientation.
- Use `SafeAreaView` or `ScrollView` only when necessary, and prefer `FlatList` or `SectionList` for rendering lists.

---

### 🤝 Contributing

Pull requests and suggestions are welcome! Feel free to fork the repository and enhance it with animations, charts, or a database.

---

### 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Let me know your GitHub repo name or link if you want the URL and references customized!

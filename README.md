## 📱 Spending Tracker App

A beautifully designed mobile application built with **React Native** that helps you track your monthly spendings and visualize your expenses using categorized icons like Netflix, Uber, Amazon, Spotify, and more.

---

### 🧰 Tech Stack

- **React Native**
- **TypeScript**
- **Expo**
- **React Navigation**
- **React Native Vector Icons**
- **SVG Icons (via `react-native-svg`)**
- **React Native Gifted Charts**
- **Custom Components & Styling with StyleSheet**

---

### 📦 Dependencies

Below is the list of major dependencies used in this project:

| Package                                | Purpose                                           |
|----------------------------------------|---------------------------------------------------|
| `react-native`                         | Core framework for building native apps          |
| `react-native-svg`                     | Rendering custom SVG icons                       |
| `react-native-vector-icons`           | Feather, Ionicons & other vector icon sets       |
| `expo`                                 | Build, preview, and deploy React Native apps     |
| `@react-navigation/native`            | Navigation management                            |
| `@react-navigation/native-stack`      | Stack navigation                                 |
| `react-native-gifted-charts`          | **Visualizing expenses with stunning charts**    |
| `typescript`                           | Type safety and development clarity              |

---

### 📊 React Native Gifted Charts

This project uses [**React Native Gifted Charts**](https://github.com/giftedhealthcare/react-native-gifted-charts) to display visually appealing bar, line, and pie charts for expense analytics.

#### 📦 Installation

```bash
npm install react-native-gifted-charts
# or
yarn add react-native-gifted-charts
```

This library supports a variety of charts including:

- **Bar Charts**
- **Line Charts**
- **Pie Charts**
- **Progress Rings**
- **Stacked Charts**

#### 💡 Usage Example

In this app, Gifted Charts is used to visualize **monthly category-wise spending** to help users easily understand where their money goes.

```tsx
import { BarChart } from 'react-native-gifted-charts';

<BarChart
  data={[
    { value: 200, label: 'Netflix' },
    { value: 150, label: 'Spotify' },
    { value: 300, label: 'Uber' },
  ]}
  frontColor="#FFA500"
  barWidth={22}
/>
```

#### 🧠 Benefits

- Easy to integrate and customize
- Clean and modern UI
- Helpful for data analytics and spending summaries

---

### 🚀 Getting Started

Follow these steps to clone, install, and run the project on your machine:

#### 1. 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

#### 2. 📦 Install Dependencies

```bash
npm install
# OR
yarn install
```

#### 3. ▶️ Run on Device or Emulator

```bash
npx expo start
```

Scan the QR using the **Expo Go** app or run it on an emulator.

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

- ✅ Monthly spendings list with icons
- ✅ Categorized services: Netflix, Uber, Amazon, Spotify, etc.
- ✅ Real-time data rendering
- ✅ Pie/Bar charts for spending visualization
- ✅ Dark UI design with intuitive UX

---

### 🛠 Customize or Extend

To add a new service:

1. Add its SVG to `assets/icons/`
2. Import it in `constants/Icons.ts`
3. Update `SpendingBlock.tsx` to conditionally render it

---

### ❗Troubleshooting

- ⚠️ Avoid nesting `FlatList` inside a `ScrollView`
- ✅ Use `FlatList` or `SectionList` directly for better performance

---

### 🤝 Contributing

Contributions are welcome! Feel free to fork and submit a pull request with enhancements.

---

### 📜 License

This project is licensed under the [MIT License](LICENSE).

---
<video controls src="Screen Recording 2025-04-30 031952.mp4" title="Title"></video>
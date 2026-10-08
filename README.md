# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💱 Currency Converter

A simple and responsive **Currency Converter Web Application** built using **React.js** and the **Frankfurter API**.

The application allows users to enter an amount, select the currencies they want to convert between, and get the converted currency value using real-time exchange-rate data.

## 🚀 Live Demo

🌐 **Live Website:**  
https://currency-converter-gamma-wheat.vercel.app/

## 📂 GitHub Repository

🔗 **GitHub:**  
https://github.com/harishragavendra2k03/Currency_Converter

## ✨ Features

- 💱 Convert between different currencies
- 💰 Enter a custom amount
- 🌍 Select source and target currencies
- 🔄 Get exchange rates from an API
- ⚡ Fast and responsive React application
- 🔔 User-friendly notifications
- 📱 Responsive design for different screen sizes
- 🎨 Clean and simple user interface

## 🛠️ Technologies Used

- **React.js** – Frontend library
- **JavaScript (ES6+)** – Application logic
- **HTML5** – Application structure
- **CSS3** – Styling and responsive design
- **Frankfurter API** – Currency exchange-rate data
- **React Hot Toast** – Notifications
- **useReducer** – State management
- **Vite** – Development and build tool
- **Vercel** – Deployment

## 🌐 API Used

This project uses the **Frankfurter API** to retrieve currency exchange-rate information.

API:

https://api.frankfurter.dev/v1

The application uses the API to fetch available currencies and exchange rates dynamically.

## 📂 Project Structure

```text
Currency_Converter/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
│
├── public/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/harishragavendra2k03/Currency_Converter.git
```

### 2. Navigate to the project folder

```bash
cd Currency_Converter
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 💡 How It Works

1. Enter the amount you want to convert.
2. Select the **From Currency**.
3. Select the **To Currency**.
4. The application fetches the latest available exchange rate from the Frankfurter API.
5. The converted amount is displayed to the user.

### Example

```text
Amount: 100

From: USD
To: INR

Result: Converted INR value
```

## 🧠 React Concepts Used

This project helped practice several important React concepts:

- Functional Components
- `useReducer`
- State management
- Event handling
- Controlled inputs
- API calls using `fetch()`
- Conditional rendering
- Component-based architecture
- React Hot Toast notifications

## 🎯 Project Purpose

The main purpose of this project is to practice building a real-world React application that consumes an external REST API.

Through this project, I practiced:

- Working with REST APIs
- Managing application state
- Handling user input
- Fetching asynchronous data
- Building responsive interfaces
- Deploying a React application using Vercel

## 📸 Screenshot

Add a screenshot of the application here:

```markdown
![Currency Converter Screenshot](screenshot.png)
```

Replace `screenshot.png` with the actual screenshot file from your project.

## 🔮 Future Improvements

Some possible improvements for this project:

- 📊 Add historical exchange-rate charts
- 📅 Allow users to select a specific date
- ⭐ Add favorite currency pairs
- 🕘 Add conversion history
- 🌙 Add dark/light mode
- 🔄 Add a swap currencies button
- 📱 Further improve mobile responsiveness

## 👨‍💻 Author

**Harish Ragavendra**

GitHub:  
https://github.com/harishragavendra2k03

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

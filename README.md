# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Redux Posts Viewer

## Overview
This is a React application that fetches and displays posts from the JSONPlaceholder API. The app features search functionality, pagination, modals for viewing post details, and smooth animations with AOS.

## Features
- Fetches and displays posts from JSONPlaceholder.
- Implements **search functionality** with debounced input.
- Supports **pagination** for easy navigation.
- Includes **a modal** for viewing post details.
- Uses **Redux Toolkit** for state management.
- Styled with **CSS animations** via AOS.

## Technologies Used
- React
- Redux Toolkit
- JSONPlaceholder API
- AOS (Animate on Scroll Library)
- FontAwesome Icons

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sharonnkem/Tasks
   cd Tasks
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
.
├── src
│   ├── page
│   │   ├── Navbar.js
│   │   ├── MainPage.js
│   │   ├── mainPage.css
│   │   ├── navbar.css
│   ├── redux
│   │   ├── categorySlice.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Usage
- **Search for posts** using the search bar.
- **Click "View"** to open a modal with post details.
- **Navigate pages** using the pagination buttons.

## Future Enhancements
- Implement **Memoization** to optimize search filtering.
- implemented **Debouncing** in Navbar.js to delay setting the search query.
- Improve accessibility and responsiveness.

## License
This project is licensed under the MIT License.


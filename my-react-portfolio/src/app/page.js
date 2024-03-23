"use client";

import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import MyAppBar from "./Components/Appbar";
import { lightTheme, darkTheme } from './Components/themes'; // Import the custom themes

export default function Page() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleLightModeToggle = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <MyAppBar isLightMode={isLightMode} handleLightModeToggle={handleLightModeToggle} />
      <div style={{ backgroundColor: isLightMode ? '#fff' : '#333', color: isLightMode ? '#000' : '#fff', minHeight: '1000vh', marginTop: -0 }}>
        {/* Your page content goes here */}
        <h1>Hello, Home Page!</h1>
      </div>
    </ThemeProvider>
  );
}

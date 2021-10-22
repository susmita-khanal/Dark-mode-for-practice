import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("darkMode"));
  };
  const [darkMode, setDarkMode] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <>
      <div className={darkMode ? "container" : ""}>
        <div className="theme-box">
          <h1 className="Dark-box">Dark Mode is On</h1>
          <input
            className="check-field"
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode ? "true" : ""}
          />
        </div>
      </div>
    </>
  );
}

export default App;

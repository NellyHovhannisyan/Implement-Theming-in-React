import React, { useState, useCallback } from "react";

import Content from "./components/Content";
import Theme from "./Theme";

export const themeModes = {
  LIGHT: "light",
  DARK: "dark",
};

function App() {
  const [themeMode, setThemeMode] = useState(themeModes.LIGHT);

  const changeThemeMode = useCallback(() => {
    setThemeMode((prevState) => {
      return prevState === themeModes.LIGHT
        ? themeModes.DARK
        : themeModes.LIGHT;
    });
  }, []);

  return (
    <div className="App">
      <Theme themeMode={themeMode}>
        <Content changeThemeMode={changeThemeMode} />
      </Theme>
    </div>
  );
}

export default App;

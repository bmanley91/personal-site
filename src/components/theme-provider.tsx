import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from '../resources/theme';
import { FunctionComponent } from 'react';

const defaultContextData = {
  dark: true,
  toggle: () => { console.log('nope')}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = (darkDefault: boolean) => {
  const [themeState, setThemeState] = React.useState({
    dark: darkDefault,
    hasThemeMounted: false
  });
  React.useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider: FunctionComponent<{children: any}> = ({ children }) => {
  let darkDefault = getInitialDarkSetting();
  
  const [themeState, setThemeState]: any = useEffectDarkMode(darkDefault);

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

const getInitialDarkSetting = (): boolean => {
  let darkDefault = false;
  if (typeof window !== 'undefined') {
    darkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem("dark", JSON.stringify(darkDefault));
  }
  return darkDefault;
};

export { ThemeProvider, useTheme };
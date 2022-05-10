import React, { SetStateAction, Dispatch, ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../resources/theme';
import { FunctionComponent } from 'react';

interface ThemeState {
  dark: boolean;
  hasThemeMounted: boolean;
}

interface ThemeContext { 
  dark: boolean; 
  toggle: () => void;
}

const defaultContextData = {
  dark: true,
  toggle: (): void => { console.log('nope');}
};

const Context = React.createContext(defaultContextData);
const useTheme = (): ThemeContext  => React.useContext(Context);

const useEffectDarkMode = (darkDefault: boolean): [ThemeState, Dispatch<SetStateAction<ThemeState>>] => {
  const [themeState, setThemeState] = React.useState({
    dark: darkDefault,
    hasThemeMounted: false
  });
  React.useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true';
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const getInitialDarkSetting = (): boolean => {
  let darkDefault = false;
  if (typeof window !== 'undefined') {
    darkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('dark', JSON.stringify(darkDefault));
  }
  return darkDefault;
};

const ThemeProvider: FunctionComponent<{children: ReactNode}> = ({ children }) => {
  const darkDefault = getInitialDarkSetting();
  
  const [themeState, setThemeState]: [ThemeState, Dispatch<SetStateAction<ThemeState>>] = useEffectDarkMode(darkDefault);

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = (): void => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <Context.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </Context.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };

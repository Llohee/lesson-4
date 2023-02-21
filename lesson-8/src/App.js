import { useState, createContext } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import './theme/theme.scss';
import { dictionary } from './lang';

export const themeContext = createContext({
  themeValue: null,
  setThemeValue: (bolValue) => { },
  lang: null,
  setLang: () => { }
})
function App() {
  const [theme, setTheme] = useState(true);
  const [lang, setLang] = useState('VI');
  return (
    <themeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (bolValue) => { setTheme(bolValue) },
      lang: lang,
      setLang: (lang) => { setLang(lang) }
    }}>
      <div className={`App ${theme ? 'light' : 'dark'} `}>
        <Header />
        <div className="content-main-app">
          <h1>{dictionary[lang]['G_1']}</h1>
        </div>

        <Footer />
      </div>

    </themeContext.Provider>
  );
}

export default App;
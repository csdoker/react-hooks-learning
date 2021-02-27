import React, { createContext, useContext, useState } from 'react'

const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

const Toolbar = () => {
  return <ThemedButton />
}

const ThemedButton = () => {
  const context = useContext(ThemeContext)
  return (
    <button
      style={{
        color: context.theme.foreground,
        backgroundColor: context.theme.background,
        fontSize: '32px'
      }}
      onClick={() => {
        context.toggle()
      }}
    >
      Click Me!
    </button>
  )
}

const ThemeContext = createContext({
  theme: themes.light,
  toggle: () => {}
})

const UseContextExample = () => {
  const [theme, setTheme] = useState(themes.light)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => {
          setTheme(theme =>
            theme === themes.light ? themes.dark : themes.light
          )
        }
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default UseContextExample

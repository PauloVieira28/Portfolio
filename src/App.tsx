import SideBar from './containers/SideBar'
import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import themedLight from './themes/light'
import { useState } from 'react'
import themedDark from './themes/dark'

function App() {
  const [usingTheme, setUsingTheme] = useState(true)

  function themeChange() {
    setUsingTheme(!usingTheme)
  }

  return (
    <ThemeProvider theme={usingTheme ? themedDark : themedLight}>
      <GlobalStyle />
      <Container>
        <SideBar themeChange={themeChange} />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App

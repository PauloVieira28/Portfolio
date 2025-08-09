import SideBar from './containers/SideBar'
import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </>
  )
}
export default App

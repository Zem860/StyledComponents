
import { Wrapper } from "./styled-Components/test1"
import NavBar from "./components/Navbar"
import { ThemeProvider } from 'styled-components';
import { theme } from "./styled-Components/theme";

function App() {


  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Wrapper>
          Hello World!

      </Wrapper>
    </ThemeProvider>
  )
}

export default App

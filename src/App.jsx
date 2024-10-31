import Home from './pages/Home'
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-Components/theme';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Router>
       <div className="App">
       <Navbar />
       <Routes >
        <Route  path="/" element={<Home />}/>
      </Routes>
       </div>
    </Router>
    </ThemeProvider>
    
  );
}



export default App;

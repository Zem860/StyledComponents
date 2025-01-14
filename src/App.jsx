import Home from './pages/Home';
import Test from './pages/Test';
import { Links,NavBar } from './componets/Index';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { CalcProvider } from './CalcContext';  // 引入我們的 Context 和 hook
import { GlobalStyle } from './componets/Test/GlobalStyle';
function App() {

  return (
  <CalcProvider>
  <GlobalStyle />

  <Router> 
  <NavBar>
      <Links />
  </NavBar>
  <Routes>
      <Route index element={<Home />} />
      <Route path="/test" element={<Test />} />
  </Routes>
</Router>
</CalcProvider>
)
;
}


export default App;

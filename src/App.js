import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutPage from "./pages/AboutPage"
import HotelsPage from './pages/HotelsPage'
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <div>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div><MainPage /></div>}></Route>
        <Route path="/about" element={<div><AboutPage/></div>}></Route>
        <Route path="/hotels" element={<div><HotelsPage /></div>}></Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;

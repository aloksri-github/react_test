import './App.css';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom"
import CardsDetail from './component/CardsDetail'
import Cards from './component/Cards';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path= '/' element={<Cards/>}/>
      <Route path= '/cart' element={<CardsDetail/>}/>
     
    </Routes>
    </>
  );
}

export default App;

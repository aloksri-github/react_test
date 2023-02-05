import './App.css';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom"
import CardDetail from './component/CardDetail'
import Card from './component/Card';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path= '/' element={<Card/>}/>
      <Route path= '/cart' element={<CardDetail/>}/>
     
    </Routes>
    </>
  );
}

export default App;

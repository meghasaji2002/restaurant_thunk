
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestView from './pages/RestView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      

       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/restaurant_view/:id' element={<RestView/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;

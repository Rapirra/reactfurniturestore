import './App.css';
import { connect } from 'react-redux';
import NavPanel from './components/NavPanel/NavPanel';
import Home from './components/Home/Home';
import {Route, Routes } from 'react-router-dom'
import UserCart from './components/UserSelect/UserCart'
import UserFav from './components/UserSelect/UserFav'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App  my-0 mx-auto ">
      <BrowserRouter>
        <NavPanel />
        <Routes>            
          <Route path='/usercart' element={<UserCart />}></Route>
          <Route path='/userfav' element={<UserFav />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>   
      </BrowserRouter> 
    </div>
  );
}

const mapStatetoProps = (state) => {
  return state
}




export default connect(mapStatetoProps) (App);

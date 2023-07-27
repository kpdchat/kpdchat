import React from "react";
import './styles/index.scss'
import {RegistrationWindow} from "./components/RegistrationWindow";
import {Route, Routes} from "react-router-dom";
import {WindowChat} from "./components/WindowChat";

function App() {
  return (
     <div className='app_wrapper'>
       <Routes>
         <Route path='/' element={ <RegistrationWindow />}/>
         <Route path='/chat' element={ <WindowChat />}/>
       </Routes>
     </div>

  );
}

export default App;

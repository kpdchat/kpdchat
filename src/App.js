import React from "react";
import './styles/index.scss'
import {RegistrationWindow} from "./components/RegistrationWindow";
import {WindowChat} from "./components/WindowChat";

function App() {
  return (
     <div className='app_wrapper'>
         <RegistrationWindow />
         <WindowChat />
     </div>

  );
}

export default App;

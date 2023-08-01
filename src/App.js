import React from "react";
import './styles/index.scss'
import { RegistrationWindow } from "./components/registrationWindow/RegistrationWindow";
import { WindowChat } from "./components/chatWindow/WindowChat";

function App() {
  return (
    <div className='app_wrapper'>
      {/* <RegistrationWindow /> */}
      <WindowChat />
    </div>

  );
}

export default App;

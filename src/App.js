import React, {useState} from "react";
import './styles/index.scss'
import {RegistrationWindow} from "./components/registrationWindow/RegistrationWindow";
import {WindowChat} from "./components/chatWindow/WindowChat";

function App() {
    const [isActive, setIsActive] = useState(false)

    function onDisplay() {
        setIsActive(true)
        console.log(isActive);
    }

    return (
        <div className='app_wrapper'>
            <RegistrationWindow onDisplay={ onDisplay } isActive={ isActive } />
            <WindowChat isActive={ isActive } />
        </div>
    );
}

export default App;

//it`s logic for change pages onClick


// function App() {
//   const [isActive, setIsActive] = useState(false)

//   function onDisplay() {
//     setIsActive(!isActive)
//     console.log(isActive);
//   }

//   return (
//     <div className='app_wrapper'>
//       <RegistrationWindow onDisplay={onDisplay} isActive = {isActive}/>
//       <WindowChat  isActive = {isActive}/>
//     </div>

//   );
// }


// for RegistrationWindow 
//it`s logic for change pages onClick
// export function RegistrationWindow({onDisplay, isActive}) {
//   function onBtnClick() {
//     onDisplay()
//   }
// in .jsx  <div className={isActive ? 'display-none' : null}> for container
// in .jsx  <button onClick = {onBtnClick}>Увійти</button> for button


//for ChatWindow 

// export function WindowChat({ isActive }) {
//   return (
//     <div className={isActive ? "display-block" : "display-none"}>
//       <div className='chat'>
//         <div className='container-grid'>
//           <ChatNavigation />
//           <ChatDialogs />
//           <ChatMessages />
//         </div>
//       </div >
//     </div>

//   );
// }
import React, { useState } from 'react'
import InputEmoji from 'react-input-emoji'
import { MdOutlineAddReaction } from "react-icons/md"


export default function MessageSendForm() {
    const [text, setText] = useState('')

    function handleOnEnter() {
        console.log('enter', text)
    }
    function onFormSubmit(e) {
        e.preventDefault()
        console.log('submit', text)
        setText('')
    }

    return (
        <form className='emoji-form' onSubmit={onFormSubmit}>
            <InputEmoji
                buttonElement={<MdOutlineAddReaction />}
                value={text}
                onChange={setText}
                cleanOnEnter
                shouldReturn
                onEnter={handleOnEnter}

                placeholder="Написати.."
            />
            <button className='emoji-submit' type='submit'></button>
        </form>

    )
}
// function onTextareaInput(e) {
//     e.target.style.height = 'auto'
//     e.target.style.height = e.target.scrollHeight + 2 + "px"
// }
// return (
//     <form action="">
//         <textarea rows="1" onInput={onTextareaInput} className='text-16 scroll-bar' type="text" placeholder='Написати...'/>
//         {/* <label>
//             <input type="file" />
//         </label> */}
//         <button type='submit'></button>
//     </form>
// )


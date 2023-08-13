import React from "react";

export default function MessageSendForm() {

    function onTextareaInput(e) {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 2 + "px"
    }
    return (
        <form action="">
            <textarea rows="1" onInput={onTextareaInput} className='text-16 scroll-bar' type="text" placeholder='Написати...'/>
            {/* <label>
                <input type="file" />
            </label> */}
            <button type='submit'></button>
        </form>
    )
}

import React from "react";

export default function MessageSendForm() {
    return (
        <form action="">
            <input className='text-16' type="text" placeholder='Написати...' />
            <label>
                <input type="file" />
            </label>
            <button type='submit'></button>
        </form>
    )
}

import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/selectors';


export default function AboutUser() {
    const user = useSelector(selectUser)
    return (
        <div className="navigation__user-about">
            <img src={user.profilePictureLink} alt= '' />
            <h3 className='text-inter-18-500'>{user.nickname}</h3>
        </div>
    )
}
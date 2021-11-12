import React from 'react';
import './style.scss';
import profilePic from '../../../assets/img/profile.png'

function ListBox({
    imgUrl = profilePic,
    name = '',
    type = ''
}) {
    return (
        <div className="container">
            {type==='member' ? <img className="container__img" src={imgUrl} alt="" /> : null }
            <p className="container__text">{name}</p>
        </div>
    )
}

export default ListBox

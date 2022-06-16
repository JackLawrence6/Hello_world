import "../style/button.scss"
import React from 'react'

export default function ButtonContent(props:{text:string,icon?:any}) {
  
    return (
        <div className='btn-text'>
            {props.icon}
            <div className="menu-bt-text">
                {props.text}
            </div>
        </div>
    )
}

import React from 'react'
import '../style/user.scss'
import testImg from '../assets/image/doge.jpg'

export default function UserInfo() {
  return (
    <div className='user-info'>
        <div className="user-name">
            Gachen
        </div>
        <div className="user-img">
            <img src={testImg} alt="img1" />
        </div>
    </div>
  )
}

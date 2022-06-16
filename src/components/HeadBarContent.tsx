import React from 'react'
import '../style/HeadBarContent.scss'
import Clock from './Clock'
import UserInfo from './UserInfo'

export default function HeadBarContent() {
  return (
    <div className='headbar-box'>
        <Clock/>
        <UserInfo/>
    </div>
  )
}

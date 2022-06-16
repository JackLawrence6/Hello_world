import React,{useState} from 'react'
import ButtonContent from './ButtonContent'
import { Link } from 'react-router-dom'

export default function NavMenuItem(props:{menuName:string,icon:JSX.Element,location:string}) {
  
    const [close,isClose] = useState(false)

    const setClose = () => {
        isClose(!close)
    }

    return (
        <div>
            <li className='nav-item'>
                <div className="menu-name">
                    <Link to={props.location} onClick={setClose}>
                        <ButtonContent text={props.menuName} icon={props.icon}/>
                    </Link>
                    {/* <button className='item-btn' onClick={setClose}>
                        <ButtonContent text={props.menuName} icon={props.icon}/>
                    </button> */}
                </div>
                {
                    close
                    &&
                    <ul className='menu-items'>
                        <li className='menu-item'>
                            单词
                        </li>
                        <li className='menu-item'>
                            例句
                        </li>
                        <li className='menu-item'>
                            小练习
                        </li>
                    </ul>
                } 
            </li>
        </div>
    )
}

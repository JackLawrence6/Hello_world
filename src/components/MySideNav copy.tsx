import React, { useState } from 'react';
import '../style/MyNav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFish,faLeaf } from '@fortawesome/free-solid-svg-icons';
import ButtonContent from './ButtonContent';

function MySideNav(props:any) {

    const [close1,setClose1] = useState(false)
    const [close2,setClose2] = useState(false)
    const [close3,setClose3] = useState(false)

    const handleClick1 = () => {
        setClose1(!close1)
    },
    handleClick2 = () => {
        setClose2(!close2)
    },
    handleClick3 = () => {
        setClose3(!close3)
    }
    

    return (
        <div className="nav-bg-settings">
            <div className="project-name">
                <h2>
                    Project Run
                </h2>
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <div className="menu-name">
                        <button className='item-btn' onClick={handleClick1}>
                            <ButtonContent text='英语' icon={<FontAwesomeIcon icon={faCoffee}/>}/>
                        </button>
                    </div>
                    {
                        close1
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
                <li className='nav-item'>
                    <div className="menu-name">
                        <button className='item-btn' onClick={handleClick2}>
                            <ButtonContent text='瑞典语' icon={<FontAwesomeIcon icon={faFish}/>}/>
                        </button>
                    </div>
                    {
                        close2
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
                <li className='nav-item'>
                    <div className="menu-name">
                        <button className='item-btn' onClick={handleClick3}>
                            <ButtonContent text='日语' icon={<FontAwesomeIcon icon={faLeaf  }/>}/>
                        </button>
                    </div>
                    {
                        close3
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
            </ul>
        </div>
    );
}

export default MySideNav;
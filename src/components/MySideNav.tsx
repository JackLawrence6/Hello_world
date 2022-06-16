import React from 'react';
import '../style/MyNav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFish,faLeaf } from '@fortawesome/free-solid-svg-icons';
import NavMenuItem from './NavMenuItem';

function MySideNav() {

    

    return (
        <div className="nav-bg-settings">
            <div className="project-name">
                <h2>
                    Project Run
                </h2>
            </div>
            <ul className='nav-items'>
                <NavMenuItem menuName='英语' icon={<FontAwesomeIcon icon={faCoffee}/>} location={'en'}/>
                <NavMenuItem menuName='瑞典语' icon={<FontAwesomeIcon icon={faFish}/>} location={'swe'}/>
                <NavMenuItem menuName='日语' icon={<FontAwesomeIcon icon={faLeaf}/>} location={'jp'}/>
            </ul>
        </div>
    );
}



export default MySideNav;
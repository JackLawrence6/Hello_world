import React from 'react'
import '../style/Layout.scss'
import MySideNav from "./MySideNav";
import HeadBarContent from './HeadBarContent';
import MainBox from './MainBox';

function Layout() {

    return (
    <div className='box'>
        <div className="upper-box">
            <div className="side-nav">
                <MySideNav/>
            </div>
            <div className="right-box">
                <div className="head-bar">
                    <HeadBarContent/>
                </div>
                <div className="main-box">
                    <MainBox/>
                </div>
            </div>
        </div>
        <div className="footer-box">
            <div className="footer-text">
                Created By Gachen
            </div>
        </div>
    </div>
  )
}

export default Layout
import React from 'react'
import { useEffect, useState } from "react"
import '../style/Clock.scss'

export default function Clock() {

    const [time, setTime] = useState({hour:new Date().getHours(),minute:new Date().getMinutes()})

    useEffect(()=>{
        // console.log("re-render!")
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    },[time.hour,time.minute])

    function tick() {
        setTime({hour:new Date().getHours(),minute:new Date().getMinutes()});
    }

    return (
        <div className="clock-text">
            <span className="seg">{"现在是"}</span>
            <span className="seg">{time.hour>=13?(time.hour>17?'夜晚':'下午'):(time.hour===12?'中午':(time.hour<7?'凌晨':'上午'))}</span>
            <span className="seg">{time.hour+"点"}</span>
            <span className="seg">{time.minute+"分"}</span>
        </div>
    )
}

import React,{ useState } from 'react'
import '../style/PaginationBar.scss'

export default function PaginationBar() {
  
    const [current,setCurrent] = useState(1)

    //need a callback for page info

    return (
        <div className="pagi">
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
        </div>
    )
}

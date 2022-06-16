import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react'
import '../style/searchBar.scss'

export default function SearchBar() {
  
    const [searchContent, setSearchContent] = useState('')

    return (
        <div className='ex-search'>
            <input className='sc-ipt' type="text" value={searchContent} onChange={(e)=>setSearchContent(e.target.value)}/>
            <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
        </div>
    )
}

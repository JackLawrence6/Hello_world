import axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../style/DataLayer.scss'
import PaginationBar from './PaginationBar'
import SearchBar from './SearchBar'
import { myGlobals } from '../global.d'

export default function DataLayer() {

    const [rows,setRows] = useState([])

    type dataRow = {
        id:string,
        wordText:string,
        wordTrans:string,
        partOfSpeech:string
    }

    const getData = () => {
        axios.get(myGlobals.learnBackendUrl+"/word/en")
        .then(
            (r)=>{
                console.log(JSON.stringify(r.data.message))
                console.log(JSON.stringify(r.data))
                setRows(r.data.data)
            }
        )
        .catch(
            (err)=>{
                console.log('failed reason is'+err.message)
                console.error(JSON.stringify(err))
            }
        )
    }


    useEffect(() => {
      getData();
    }, [])
    


  return (
    <div className="main-content">
        <div className="table-extra">
            <SearchBar/>
            <PaginationBar/>
        </div>
        <table className="lang-data">
            <thead className='data-th'>
                <tr className='tb-row'>
                    <th className='cn'>序号</th>
                    <th className='hf'>原形</th>
                    <th className='hf'>词性</th>
                    <th className='max'>翻译</th>
                    <th className='max'>变形</th>
                </tr>
            </thead>
            <tbody className='data-tbd'>
                <tr className='tb-row'>
                    <td className='cn'><div className="cell-text">序号</div></td>
                    <td className='hf'>Classic</td>
                    <td className='hf'>Noun</td>
                    <td className='max'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est consequuntur vel iste provident itaque quos repellat veniam tenetur nostrum.</td>
                    <td className='max'>无</td>
                </tr>
                {
                    rows.length===0?
                    (
                        <tr className='tb-row'>
                            <td style={{textAlign:'center',width:'100%'}}>
                                {'Connection failed'}
                            </td>
                        </tr>
                    )
                    :
                    rows.map((e:dataRow,index)=>{
                        return (
                            <tr className='tb-row' key={index}>
                                <td className='cn'><div className="cell-text">{e.id}</div></td>
                                <td className='hf'>{e.wordText}</td>
                                <td className='hf'>{e.partOfSpeech}</td>
                                <td className='max'>{e.wordTrans}</td>
                                <td className='max'>无</td>
                            </tr>
                        )
                    })
                }
                {/* <tr className='tb-row'>
                    <td className='cn'><div className="cell-text">序号</div></td>
                    <td className='hf'>Classic</td>
                    <td className='hf'>Noun</td>
                    <td className='max'>古典的</td>
                    <td className='max'>无</td>

                </tr>
                <tr className='tb-row'>
                    <td className='cn'><div className="cell-text">序号</div></td>
                    <td className='hf'>Classic</td>
                    <td className='hf'>Noun</td>
                    <td className='max'>古典的</td>
                    <td className='max'>无</td>

                </tr>
                <tr className='tb-row'>
                    <td className='cn'><div className="cell-text">序号</div></td>
                    <td className='hf'>Classic</td>
                    <td className='hf'>Noun</td>
                    <td className='max'>古典的</td>
                    <td className='max'>无</td>
                </tr>
                <tr className='tb-row'>
                    <td className='cn'>序号</td>
                    <td className='hf'>Classic</td>
                    <td className='hf'>Noun</td>
                    <td className='max'>古典的</td>
                    <td className='max'>无</td>
                </tr> */}
            </tbody>
        </table>

    </div>
  )
}

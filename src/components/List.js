import styled from 'styled-components';
import * as _ from './style';
import {HeaderData} from '../data/item'

const RowTable=styled(_.Row)`
background-color:#FFE595;
`
const Headers=styled.div`
font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
export default function List() {
  return (
    <_.Scaffold>
    <RowTable>
    <Headers>#</Headers>
    {
      HeaderData.map((data)=>{
        return <Headers>{data}</Headers>
      })
    }
    </RowTable>
    </_.Scaffold>
  )
}

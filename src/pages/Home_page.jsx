import MainAppBar from '../components/MainAppBar'
import {Scaffold} from '../components/style'
import Items from '../components/List'
import styled from 'styled-components'

const _Scaffold=styled(Scaffold)`

background-color: #FFE595;
height:100vh ;

`

export default function Home_page() {
  return (
       <_Scaffold>
       <MainAppBar/>

       <Items></Items>
       </_Scaffold>
       
    
  )
}

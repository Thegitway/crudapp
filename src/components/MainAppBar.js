import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box} from '@mui/material';
import * as _ from './style'
import styled from 'styled-components';

const _AppBar=styled(AppBar)`
background-color:white ;
padding: 0px;
margin:0px 0px 11px 0px;

`
  
export default function MainAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <_AppBar color='' position="static">
      <_.Row>
          <_.NavIcon  padding={"5px 0px 5px 1vw"} src="logo192.png"></_.NavIcon>
          <_.Button >ADD</_.Button>
    </_.Row>
      </_AppBar>
     
    </Box>
   
  );
}

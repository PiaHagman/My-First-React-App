import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  Link } from "react-router-dom";

export default function AccountMenu() {
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>
        <Link to="/todolist" className='menu-link'>
          Todo List
          </Link></Typography>
          <Typography sx={{ minWidth: 100 }}>
        <Link to="/counter" className='menu-link'>
          Counter
          </Link></Typography>
          <Typography sx={{ minWidth: 100 }}>
          <Link to="/users" className='menu-link'>GitHub Users</Link></Typography>
      </Box>
    </React.Fragment>
  );
}

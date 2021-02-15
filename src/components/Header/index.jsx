import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import './styles.css';

function Header({ title }) {
  return (
    <div>
      <AppBar position='absolute' className='appBar'>
        <Toolbar className='toolbar'>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className='title'
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;

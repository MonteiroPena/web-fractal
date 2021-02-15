import React from 'react';

import { Link } from 'react-router-dom';

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import Public from '@material-ui/icons/Public';

import Logo from '../../assets/Logo.svg';

import './styles.css';

function Sidebar() {
  return (
    <>
      <Drawer variant='permanent' classes='drawerPaper'>
        <div className='toolbarIcon'>
          <Link to='/'>
            <IconButton>
              <img src={Logo} alt='Logo Fractal' />
            </IconButton>
          </Link>
        </div>
        <Divider />
        <List>
          <Link to='/graphics'>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary='Gráficos' />
            </ListItem>
          </Link>
          <Link to='/maps'>
            <ListItem button>
              <ListItemIcon>
                <Public />
              </ListItemIcon>
              <ListItemText primary='Mapas ' />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default Sidebar;

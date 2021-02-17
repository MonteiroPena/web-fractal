import React from 'react';

import { Box, Container, CssBaseline, Grid, Paper } from '@material-ui/core';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import siga from '../../assets/Siga.svg';

import './styles.css';

function Home() {
  return (
    <div className='root'>
      <CssBaseline />
      <Header title='Home' />
      <Sidebar />
      <main className='content'>
        <div className='appBarSpacer' />
        <Container maxWidth='lg' className='container'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className='paper'>
                <img src={siga} alt='siga' />
                <p className='p-home'>
                  Todas informações de recursos hídricos integradas
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;

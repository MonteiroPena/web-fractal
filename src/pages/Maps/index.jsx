import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import { Box, Container, CssBaseline, Grid, Paper } from '@material-ui/core';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import PolylineComponent from './components/PolylineComponent';
import PolygonComponent from './components/PolygonComponent';
import MarkerComponent from './components/MarkerComponent';

import './styles.css';

function Maps() {
  return (
    <div className='root'>
      <CssBaseline />
      <Header title='Mapas' />
      <Sidebar />
      <main className='content'>
        <div className='appBarSpacer' />
        <Container maxWidth='lg' className='container'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* mapa */}

              <Paper className='paper-maps'>
                <MapContainer
                  id='mapId'
                  center={[-27.426846004859655, -48.6880356647392]}
                  zoom={9}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  {/* Maker */}
                  <MarkerComponent />
                  {/* poligono */}
                  <PolygonComponent />
                  {/* Linhas */}
                  <PolylineComponent />
                </MapContainer>
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

export default Maps;

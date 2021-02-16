import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Container, CssBaseline, Grid, Paper } from '@material-ui/core';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import PolylineComponent from './components/PolylineComponent';
import PolygonComponent from './components/PolygonComponent';

import api from '../../services/api';

import './styles.css';

const headers = {
  'Content-Type': 'application/json',
};
function Maps() {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/pontos.json', { headers: headers })
      .then((response) => {
        setPontos(response.data);
      });
  }, []);

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
              {/* mapas */}
              {pontos.map((ponto) => {
                const positions = [ponto.lat_stt, ponto.lng_stt];

                return (
                  <Paper className='paper-maps' key={ponto.id_stt}>
                    <MapContainer
                      id='mapId'
                      center={positions}
                      zoom={12}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      />
                      <Marker position={positions}>
                        <Popup>{ponto.nome_stt}</Popup>
                      </Marker>

                      {/* poligono */}
                      <PolygonComponent />
                      {/* Linhas */}
                      <PolylineComponent />
                    </MapContainer>
                    <p>
                      {ponto.nome_stt} - Responsavel: {ponto.responsavel_stt}
                    </p>
                  </Paper>
                );
              })}
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

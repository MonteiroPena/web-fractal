import React, { useState, useEffect } from 'react';

import { Marker, Popup } from 'react-leaflet';

import api from '../../../../services/api';

const headers = {
  'Content-Type': 'application/json',
};

function MarkerComponent() {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/pontos.json', { headers: headers })
      .then((response) => {
        setPontos(response.data);
      });
  }, []);
  return (
    <>
      {pontos.map((ponto, index) => {
        const positions = [ponto.lat_stt, ponto.lng_stt];

        return (
          <Marker position={positions} key={index}>
            <Popup>{ponto.nome_stt}</Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default MarkerComponent;

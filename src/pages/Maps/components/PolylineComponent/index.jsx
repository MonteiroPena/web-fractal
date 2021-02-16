import React, { useEffect, useState } from 'react';
import { Polyline } from 'react-leaflet';

import api from '../../../../services/api';

const headers = {
  'Content-Type': 'application/json',
};

function PolylineComponent() {
  const [linhas, setLinhas] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/linhas.json', { headers: headers })
      .then((response) => {
        // console.log(response.data);
        setLinhas(response.data);
      });
  }, []);

  const limeOptions = { color: 'lime' };
  return (
    <>
      {linhas.map((linha, index) => {
        const polyline = [[linha.lat, linha.lng]];
        return (
          <Polyline
            key={index}
            pathOptions={limeOptions}
            positions={polyline}
          />
        );
      })}
    </>
  );
}

export default PolylineComponent;

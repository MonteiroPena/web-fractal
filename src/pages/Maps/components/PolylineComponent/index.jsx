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
      <Polyline
        key='linhasId'
        pathOptions={limeOptions}
        positions={[linhas]}
      />
    </>
  );
}

export default PolylineComponent;

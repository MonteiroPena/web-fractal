import React, { useEffect, useState } from 'react';
import { Polygon } from 'react-leaflet';

import api from '../../../../services/api';

const headers = {
  'Content-Type': 'application/json',
};

function PolygonComponent() {
  const [poligono, setPoligono] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/poligono.json', { headers: headers })
      .then((response) => {
        // console.log(response.data);
        setPoligono(response.data);
      });
  }, []);

  const purpleOptions = { color: 'purple' };

  return (
    <>
      {poligono.map((polig, index) => {
        const polygon = [[polig.lat, polig.lng]];
        return (
          <Polygon
            key={index}
            pathOptions={purpleOptions}
            positions={polygon}
          />
        );
      })}
    </>
  );
}

export default PolygonComponent;

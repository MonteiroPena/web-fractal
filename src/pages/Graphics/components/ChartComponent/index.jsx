import React, { useEffect, useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import api from '../../../../services/api';

const headers = {
  'Content-Type': 'application/json',
};

function ChartComponent() {
  const [tempos, setTempos] = useState([]);
  const [niveis, setNiveis] = useState([]);
  const [chuvas, setChuvas] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/series.json', {
        headers: headers,
      })
      .then((response) => {
        // // console.log(response.data);
        setTempos(response.data.map((item) => item.data_hora));
        setNiveis(response.data.map((item) => parseInt(item.nivel)));
        setChuvas(response.data.map((item) => item.chuva));

        // const niveis = [];
        // const tempos = [];
        // const chuvas = [];

        // response.data.forEach((item, index) => {
        //   if (index % 10 === 0) {
        //     niveis.push(parseInt(item.nivel, 10));
        //     tempos.push(item.data_hora);
        //     chuvas.push(item.chuva);
        //   }
        // });
        // setTempos(tempos);
        // setNiveis(niveis);
        // setChuvas(chuvas);
      });
  }, []);

  const options = {
    chart: {
      zoomType: 'xy',
    },
    title: {
      text: 'Nível / Chuva',
    },
    xAxis: [
      {
        categories: tempos,
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: '{value}',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
        title: {
          text: 'Niveis',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: 'Chuvas',
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        labels: {
          format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)',
    },
    series: [
      {
        name: 'Chuvas',
        type: 'column',
        yAxis: 1,
        data: chuvas,
        tooltip: {
          valueSuffix: ' mm',
        },
      },
      {
        name: 'Níveis',
        type: 'line',
        data: niveis,
        tooltip: {
          valueSuffix: 'm',
        },
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default ChartComponent;

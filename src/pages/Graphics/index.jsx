import React, { useState, useEffect } from 'react';

import { Box, Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import api from '../../services/api';

import './styles.css';

const headers = {
  'Content-Type': 'application/json',
};

function Graphics() {
  const [tempo, setTempo] = useState([]);
  const [niveis, setNiveis] = useState([]);
  const [chuvas, setChuvas] = useState([]);

  useEffect(() => {
    api
      .get('/recrutamentos/frontend/series.json', {
        headers: headers,
      })
      .then((response) => {
        // // console.log(response.data);
        // setTempo(response.data.map((item) => item.data_hora));
        // setNiveis(response.data.map((item) => item.nivel));
        // // console.log(response.data.map((item) => item.nivel));
        // setChuvas(response.data.map((item) => item.chuva));

        const niveis = [];
        const tempos = [];
        const chuvas = [];

        response.data.forEach((item, index) => {
          // if (index % 10 === 0) {
            niveis.push(parseInt(item.nivel, 10));
            tempos.push(item.data_hora);
            chuvas.push(item.chuva);
          // }
        });
        setTempo(tempos);
        setNiveis(niveis);
        setChuvas(chuvas);
        // console.log(chuvas.length);
      });
  }, []);

  const options = {
    chart: {
      zoomType: 'xy',
    },
    title: {
      text: 'chuva/nivel',
    },
    xAxis: [
      {
        categories: tempo,
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
        name: 'chuvas',
        type: 'column',
        yAxis: 1,
        data: chuvas,
        tooltip: {
          valueSuffix: ' mm',
        },
      },
      {
        name: 'Niveis',
        type: 'line',
        data: niveis,
        tooltip: {
          valueSuffix: '°C',
        },
      },
    ],
  };

  return (
    <div className='root'>
      <CssBaseline />
      <Header title='Gráficos' />
      <Sidebar />
      <main className='content'>
        <div className='appBarSpacer' />
        <Container maxWidth='2000px' className='container'>
          <Grid container spacing={3}>
            <Grid item xs={12} /*  md={6} lg={6} */>
              <Paper className='paper-maps'>
                <HighchartsReact
                  // key={chart.id_dns}
                  highcharts={Highcharts}
                  options={options}
                />
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

export default Graphics;

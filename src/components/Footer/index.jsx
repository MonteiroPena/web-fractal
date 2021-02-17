import React from 'react';
import Typography from '@material-ui/core/Typography';

function Footer() {
  const day = new Date().getDate();
  const mes = [];
  mes[0] = 'Janeiro';
  mes[1] = 'Fevereiro';
  mes[2] = 'Março';
  mes[3] = 'Abril';
  mes[4] = 'Maio';
  mes[5] = 'Junho';
  mes[6] = 'Julho';
  mes[7] = 'Agosto';
  mes[8] = 'Setembro';
  mes[9] = 'Outubro';
  mes[10] = 'Novembro';
  mes[11] = 'Dezembro';
  const mouth = mes[new Date().getMonth()];
  const year = new Date().getFullYear();

  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      Factal Engenharia - {`${day} / ${mouth} / ${year}`}
    </Typography>
  );
}

export default Footer;

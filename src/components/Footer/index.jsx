import React from 'react'
import Typography from '@material-ui/core/Typography';


function Footer() {

  const day = new Date().getDate()
  const mouth = new Date().getMonth() +1
  const year = new Date().getFullYear()

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Factal Engenharia - {`${day}/ ${mouth}/ ${year}`}
    </Typography>
  )
}

export default Footer

import React from 'react';
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core';

const Tiers = () => {
  return (
    <>
      <Typography variant="h5" component="h4">
        Check current tiers
      </Typography>
      <FormControlLabel
        control={
          <Checkbox checked={true} name="massive_march" color="primary" />
        }
        label="Massive March"
      />
    </>
  );
};

export default Tiers;

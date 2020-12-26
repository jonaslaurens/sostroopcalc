import { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { TroopCalcContext } from '../../context/Store';

const MarchSize = () => {
  const {
    isMassiveMarch,
    setIsMassiveMarch,
    totalArmySize,
    marchSize,
    handleSetMarchSize
  } = useContext(TroopCalcContext);

  return (
    <Grid>
      <div>Total Troops Size: {totalArmySize}</div>
      <Grid>
        <TextField
          id="march_size"
          label="March Size"
          placeholder="0"
          margin="normal"
          fullWidth
          type="number"
          inputProps={{
            min: 0
          }}
          InputLabelProps={{
            shrink: true
          }}
          value={marchSize}
          onChange={handleSetMarchSize}
          aria-describedby="march_size"
        />
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            checked={isMassiveMarch}
            onChange={() => setIsMassiveMarch(!isMassiveMarch)}
            name="massive_march"
            color="primary"
          />
        }
        label="Massive March"
      />
    </Grid>
  );
};

export default MarchSize;

import { useContext } from 'react';

import { TextField, Grid } from '@material-ui/core';

import MarchSize from '../marchsize/MarchSize';
import Tiers from '../tier/Tiers';

import { TroopCalcContext } from '../../context/Store';

const Troops = () => {
  const { army, updateTroops } = useContext(TroopCalcContext);

  const handleTroopUpdate = e => {
    const splitted = e.target.name.split(' ');
    updateTroops(splitted[0], splitted[1], e.target.value);
  };

  return (
    <Grid>
      <MarchSize />
      {army.map(tier => (
        <Grid key={tier.id}>
          <h3>{`Tier: ${tier.id}`}</h3>
          <Grid>
            {tier.troops.map((troop, i) => (
              <Grid key={i}>
                <TextField
                  id={troop.name + tier.id}
                  label={troop.name}
									value={troop.amount === 0 ? '' : troop.amount}
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
                  name={`${tier.id} ${troop.name}`}
                  onChange={handleTroopUpdate}
                  aria-describedby={`${troop.name}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Troops;

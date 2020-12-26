import { useContext } from 'react';

import Ratio from '../settings/Ratio';

import { TroopCalcContext } from '../../context/Store';

import { Grid, Typography } from '@material-ui/core';

const Settings = () => {
	
	const { ratios, updateRatio, ratioError } = useContext(TroopCalcContext);
	
  return (
    <Grid>
			<Grid>
				<Typography variant="h4">Ratios</Typography>
			</Grid>
			{ratioError.status && ratioError.msg}
			{ratios.map(({name, ratio}) => (
				<Ratio key={name} title={name} ratio={ratio} handleUpdateRatio={updateRatio} />
			))}
    </Grid>
  );
};

export default Settings;
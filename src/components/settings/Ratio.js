import { useContext } from 'react';

// import { TroopCalcContext } from '../../context/Store';

import { TextField, Grid, InputAdornment, Typography } from '@material-ui/core';

const Ratio = (props) => {
  //const { ratios, updateRatio } = useContext(TroopCalcContext);
	
	const {title, ratio, handleUpdateRatio} = props;

  const handleChange = e => {
    handleUpdateRatio(title, e.target.name, e.target.value);
  };

  const getName = value => {
    switch (value) {
      case 0:
        return 'Infantry';
				
      case 1:
        return 'Rider';
				
      case 2:
        return 'Hunter';
				
      default:
        return null;
    }
  };

  return (
    <Grid>
			<Grid>
				<Typography variant="h5">{title}</Typography>
				<Grid>
					{ratio.map((position, i) => (
						<Grid key={i}>
							<TextField
								id={`${getName(i)}-ratio`}
								fullWidth
								value={position === 0 ? '' : position}
								placeholder='0'
								name={i.toString()}
								onChange={handleChange}
								label={getName(i)}
								type="number"
								InputProps={{
									endAdornment: <InputAdornment position="end">%</InputAdornment>,
									min: 0,
									max: 100
								}}
								aria-describedby={`${getName(i)}-ratio`}
								margin="normal"
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
    </Grid>
  );
};

export default Ratio;


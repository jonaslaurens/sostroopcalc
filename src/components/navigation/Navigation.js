import { useState } from 'react';

import Routes from '../../context/Routes';

import {
	AppBar, 
	Toolbar, 
	IconButton, 
	Typography,
	Tab,
	Tabs
} from '@material-ui/core';

const Navigation = () => {

	const [selectedTab, setSelectedTab] = useState(0);
	
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	}  
	
	return (
		<AppBar>
			<Tabs value={selectedTab} onChange={handleChange}>
				<Tab label="Army" />
				<Tab label="Settings" />
				<Tab label="Hello" />
			</Tabs>
		</AppBar>
	)
}

export default Navigation;
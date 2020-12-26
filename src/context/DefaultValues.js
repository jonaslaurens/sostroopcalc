const DEFAULT_ERROR_RATIO = {
	status: false,
	msg: '',
	color: 'success'
}

const DEFAULT_TROOPS = [
	{	name: 'Infantry', amount: 0 },
	{ name: 'Riders', amount: 0 },
	{ name: 'Hunters', amount: 0 }
];

const DEFAULT_RATIO_TRAP = [5, 30, 65];

const DEFAULT_RATIO_PVP = [60, 20, 20];

const DEFAULT_TIERS = ['10', '9', '8'];

export { 
	DEFAULT_ERROR_RATIO, 
	DEFAULT_RATIO_TRAP, 
	DEFAULT_RATIO_PVP, 
	DEFAULT_TROOPS, 
	DEFAULT_TIERS
};
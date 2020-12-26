import Troops from '../troops/Troops';
import Trap from '../trap/Trap';
import Pvp from '../pvp/Pvp';
import Settings from '../settings/Settings';
import SettingsIcon from '@material-ui/icons/Settings';

const Routes = [
  {
    id: 0,
    name: 'Troops',
    path: '/troops',
    component: <Troops />
  },
  {
    id: 1,
    name: 'Trap',
    path: '/trap',
    component: <Trap />
  },
  {
    id: 2,
    name: 'Pvp',
    path: '/pvp',
    component: <Pvp />
  },
  {
    id: 3,
    name: <SettingsIcon />,
    path: '/settings',
    component: <Settings />
  }
];

const tabNameToIndex = {
  0: 'troops',
  1: 'trap',
  2: 'pvp',
  3: 'settings'
};

const indexToTabName = {
  troops: 0,
  trap: 1,
  pvp: 2,
  settings: 3
};

export { Routes, tabNameToIndex, indexToTabName };

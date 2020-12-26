import { useState, createContext, useEffect } from 'react';

import {
  DEFAULT_ERROR_RATIO,
  DEFAULT_RATIO_TRAP,
  DEFAULT_RATIO_PVP,
  DEFAULT_TROOPS,
  DEFAULT_TIERS
} from './DefaultValues.js';

export const TroopCalcContext = createContext();

export const TroopCalcProvider = props => {
  const [marchSize, setMarchSize] = useState(113480);

  const [massiveMarch] = useState(0.1); // 10%

  const [isMassiveMarch, setIsMassiveMarch] = useState(false);

  const [totalArmySize, setTotalArmySize] = useState(0);

  const [trapRatio, setTrapRatio] = useState([]);

  const [pvpRatio, setPvpRatio] = useState([]);

  const [army, setArmy] = useState([
    {
      id: '10',
      troops: [
        { name: 'Infantry', amount: 0 },
        { name: 'Riders', amount: 0 },
        { name: 'Hunters', amount: 0 }
      ]
    },
    {
      id: '9',
      troops: [
        { name: 'Infantry', amount: 164327 },
        { name: 'Riders', amount: 191525 },
        { name: 'Hunters', amount: 195496 }
      ]
    },
    {
      id: '8',
      troops: [
        { name: 'Infantry', amount: 0 },
        { name: 'Riders', amount: 0 },
        { name: 'Hunters', amount: 0 }
      ]
    }
  ]);

  const [ratios, setRatios] = useState([
    {
      name: 'Trap',
      ratio: [5, 30, 65]
    },
    {
      name: 'Pvp',
      ratio: [60, 20, 20]
    }
  ]);

  const [marches, setMarches] = useState([]);

  const [ratioError, setRatioError] = useState({
    status: false,
    msg: '',
    color: 'success'
  });

  useEffect(() => {
    let count = 0;

    army.forEach(tier => {
      tier.troops.forEach(troop => {
        count += troop.amount;
      });
    });

    calculateTrapMarch();

    setTotalArmySize(count);
  }, [army]);

  const handleSetMarchSize = e => {
    e.preventDefault();
    setMarchSize(e.target.value);
  };

  const updateTroops = (devision, troopName, amount) => {
    setArmy(
      army.map(tier => {
        if (tier.id === devision) {
          tier.troops.map(troop => {
            if (troop.name === troopName) {
              if (amount === '') {
                return (troop.amount = 0);
              }
              return (troop.amount = parseInt(amount));
            }
            return troop;
          });
        }
        return tier;
      })
    );
  };

  const updateRatio = (eventName, position, value) => {
    setRatios(
      ratios.map(item => {
        if (item.name === eventName) {
          item.ratio.map((percentage, i) => {
            if (value === '') {
              return (item.ratio[position] = 0);
            }
            return (item.ratio[position] = parseInt(value));
          });
        }
        return item;
      })
    );
    checkRatioSize(eventName);
  };

  const checkRatioSize = eventName => {
    ratios.map(item => {
      if (item.name === eventName) {
        const totalRatio = item.ratio.reduce((acc, i) => (acc += i));
        if (totalRatio > 100) {
          setRatioError(prevState => ({
            ...prevState,
            status: true,
            msg: 'Ratio exceeds max of 100%!',
            color: 'danger'
          }));
        } else {
          setRatioError(DEFAULT_ERROR_RATIO);
        }
      }
      return item;
    });
  };

  const calculateTrapMarch = () => {
    const trapTroops = army;

    const ratio = calculateRatio(ratios[0].ratio);

    let isTroopsLeft = true;

    while (isTroopsLeft) {
      const newMarch = DEFAULT_TROOPS;

      for (let i = 0; i < newMarch.length; i++) {
        newMarch[i].amount = ratio[i];

        trapTroops[i].troops[i].amount -= ratio[i];
      }

      setMarches(prevState => [...prevState, newMarch]);

      isTroopsLeft = false;
    }

    console.log(marches);
  };

  console.log(marches);

  const calculateRatio = ratioToCalculate => {
    return ratioToCalculate.map((curr, i) => {
      return marchSize * (curr / 100);
    });
  };

  return (
    <TroopCalcContext.Provider
      value={{
        totalArmySize,
        marchSize,
        handleSetMarchSize,
        isMassiveMarch,
        setIsMassiveMarch,
        army,
        updateTroops,
        ratios,
        updateRatio,
        ratioError
      }}
    >
      {props.children}
    </TroopCalcContext.Provider>
  );
};

//noZeroes.sort((a, b) => b - a);

// const createMarch = (availableTroops, ratio) => {
//   if (checktroopsLeft(availableTroops) >= 0) {
//     const newMarch = DEFAULT_TROOPS;

//     for (let i = 0; i < newMarch.length; i++) {
//       newMarch[i].amount = ratio[i];

//       availableTroops[i].amount -= ratio[i];
//     }

//     setMarches([...marches, newMarch]);

//     console.log(marches);

//     return createMarch(availableTroops, ratio);
//   }
//   return;
// };

// const checktroopsLeft = troopsLeft => {
//   const values = troopsLeft.map(troop => troop.amount);

//   return values.reduce((acc, cur) => (acc += cur));
// };

// loop over tiers bij het creëren van march
// for (let i = 0; i < trapTroops.length; i++) {
//   // check if there are troops in current tier
//   if (checktroopsLeft(trapTroops[i].troops)) {
//     createMarch(trapTroops[i].troops, ratio);
//     trapMarches.push({ tier: DEFAULT_TIERS[i], marches: marches });
//   } else {
//     trapMarches.push({ tier: DEFAULT_TIERS[i] });
//   }
// }

/***
 *
 *
 * TESTING IN TRAP.JS
 */
/*  const { army, ratios } = useContext(TroopCalcContext);
 const [marches, setMarches] = useState([]);

 const constructMarch = () => {
   const trapArmy = army;
   const ratio = calculateRatio(ratios[0].ratio);

   let noMore = false;

   console.log(trapArmy);
   console.log(ratio);

   while (!noMore) {
     const newMarch = DEFAULT_TROOPS;

     for (let i = 0; i < newMarch.length; i++) {
       newMarch[i].amount = ratios[i];

       trapArmy[i].troops[i].amount -= ratios[i];
     }

     setMarches(prevState => [...prevState, newMarch]);

     for (let i = 0; i < trapArmy.length; i++) {
       // if(trapArmy[i].amount)
     }

     noMore = true;
   }
 }; */

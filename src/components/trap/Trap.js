import ArmySetup from '../armySetup/ArmySetup';

const Trap = () => {
  const data = [
    { name: 'infantry', amount: 123456 },
    { name: 'riders', amount: 987654 },
    { name: 'hunters', amount: 654321 }
  ];

  return (
    <div>
      <ArmySetup troops={data} />
    </div>
  );
};

export default Trap;

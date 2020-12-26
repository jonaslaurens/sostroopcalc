const ArmySetup = props => {
  const { troops } = props;

  return (
    <>
      {troops.map(troop => (
        <p>
          <span>{troop.name}:&nbsp;</span>
          <span>{troop.amount}</span>
        </p>
      ))}
    </>
  );
};

export default ArmySetup;

import { useEffect, Fragment, useState } from 'react';

import { Routes, indexToTabName, tabNameToIndex } from './Routes';

import { AppBar, Tabs, Tab, Container } from '@material-ui/core';

const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.innerWidth > 602 ? setIsDesktop(true) : setIsDesktop(false);
  }, []);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="navigation"
          centered={isDesktop}
        >
          {Routes.map(route => (
            <Tab key={route.id} label={route.name} />
          ))}
        </Tabs>
      </AppBar>
      <Container maxWidth="sm">
        {Routes.map((route, i) => (
          <Fragment key={i}>{selectedTab === i && route.component}</Fragment>
        ))}
      </Container>
    </>
  );
};

export default Home;

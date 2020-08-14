import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TatetiAppBar = props => {
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={props.tab}
        onChange={(e, index) => { 
          debugger;
          props.setTab(index)
        }}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Jugar" />
        <Tab label="Score"/>
      </Tabs>
    </AppBar>
    // <div style={{width: '100%'}}>
    //   <button onClick={() => props.setTab('jugar')}>Jugar</button>
    //   <button onClick={() => props.setTab('score')}>Estadisticas</button>
    // </div>
  );
};

export default TatetiAppBar;
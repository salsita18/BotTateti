import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ alignItems: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
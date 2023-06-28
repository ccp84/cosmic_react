import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { purple, grey } from '@mui/material/colors';

function Header() {
 

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: purple[900] }}>
        <Typography
          component="h2"
          variant="h5"
          color={grey[50]}
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Cosmic Dinosaur Tech
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='#'
            sx={{ p: 1, flexShrink: 0 }}
          >
            Coursework
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='#'
            sx={{ p: 1, flexShrink: 0 }}
          >
            Hackathons
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href='#'
            sx={{ p: 1, flexShrink: 0 }}
          >
            Projects
          </Link>
        
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
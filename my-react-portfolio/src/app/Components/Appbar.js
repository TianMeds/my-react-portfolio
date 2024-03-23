import React, { useState } from 'react';
import { Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';

function MyAppBar({ isLightMode, handleLightModeToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Clicked ${action}`);
    handleMenuClose();
  };

  return (
    <Toolbar sx={{ bgcolor: isLightMode ? 'white' : '#333', color: isLightMode ? 'black' : 'white' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Christian
      </Typography>

      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="light-mode-toggle"
        onClick={handleLightModeToggle}
        sx={{ mr: 1 }}
      >
        {isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Typography
        variant="subtitle1"
        sx={{ display: { xs: 'none', sm: 'block' }, color: isLightMode ? 'black' : 'white', mr: 3 }}
        onClick={() => handleMenuItemClick('About')}
        style={{ cursor: 'pointer' }}
      >
        About
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ display: { xs: 'none', sm: 'block' }, color: isLightMode ? 'black' : 'white', mr: 3 }}
        onClick={() => handleMenuItemClick('Project')}
        style={{ cursor: 'pointer' }}
      >
        Project
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ display: { xs: 'none', sm: 'block' }, color: isLightMode ? 'black' : 'white' }}
        onClick={() => handleMenuItemClick('Contact')}
        style={{ cursor: 'pointer' }}
      >
        Contact
      </Typography>

      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuClick}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={(event) => event.stopPropagation()}
      >
        <MenuItem onClick={() => handleMenuItemClick('About')}>About</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Project')}>Project</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Contact')}>Contact</MenuItem>
      </Menu>
    </Toolbar>
  );
}

export default MyAppBar;

import React, { useState } from "react";

// Google maps
import { Autocomplete } from "@react-google-maps/api";

// Material Ui
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import { Search } from "@material-ui/icons";

// Styles
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new place
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.root, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

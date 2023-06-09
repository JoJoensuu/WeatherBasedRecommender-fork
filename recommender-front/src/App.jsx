import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MapComponent from './components/map/MapComponent';
import HeaderComponent from './components/header/HeaderComponent';
import 'leaflet/dist/leaflet.css';
import '@fontsource/roboto/300.css';
import './assets/style.css';

function App() {
  const [accessibility, setAccessibility] = useState('');
  let theme = createTheme({});
  theme = responsiveFontSizes(theme, {
    typography: {
      h1: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
  });

  const handleOptionChange = (event) => {
    setAccessibility(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Weather-Based Recommender</title>
          <meta name="description" content="Weather-Based Recommender" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <Grid container>
          <Grid item xs={12} className="header-container">
            <HeaderComponent
              accessibility={accessibility}
              handleChange={handleOptionChange}
            />
          </Grid>
          <Grid item xs={12} className="map-container">
            <MapComponent
              accessibility={accessibility}
            />
          </Grid>
        </Grid>
      </HelmetProvider>

    </ThemeProvider>
  );
}

export default App;

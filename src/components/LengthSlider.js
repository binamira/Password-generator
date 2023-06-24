import React, { useState } from 'react';

import Slider from '@mui/material/Slider';

export default function LengthSlider(props) {



  return (
    <Slider
      className="slider"
      size="large"
      aria-label="Password Length"
      value={props.value}
     
      color="success"
      onChange={props.onSliderChange}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={10}
      max={20}
    />
  );
}

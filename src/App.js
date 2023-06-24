import "./styles.css";
import React, { useState } from "react";

import LengthSlider from "./components/LengthSlider";
import Checkboxes from "./components/Checkboxes";
import Generate from "./components/Generate";
import $ from "jquery"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LockIcon from '@mui/icons-material/Lock';

export default function App() {
  // State hooks
  const [sliderValue, setSliderValue] = useState(16); // State for password length
  const [excludeNumbers, setExcludeNumbers] = useState(false); // State for excluding numbers
  const [excludeSpecialChars, setExcludeSpecialChars] = useState(false); // State for excluding special characters
  const [resultData, setResultData] = useState([]); // State for storing generated passwords

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleNumberChange = () => {
    setExcludeNumbers((prevValue) => !prevValue);
  };

  const handleSpecialChars = () => {
    setExcludeSpecialChars((prevValue) => !prevValue);
  };

  function handleClick() {
    const apiKey = process.env.REACT_APP_API_KEY;
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + sliderValue + '&exclude_numbers=' + excludeNumbers + '&exclude_special_chars=' + excludeSpecialChars,
      headers: { 'X-Api-Key': apiKey },
      contentType: 'application/json',
      success: function (result) {
        const resultValues = Object.values(result);
        setResultData(resultValues);
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });
  }

  return (
    <div className="App">
      {/* Header */}
      <Typography id="header" variant="h4" fontWeight="bold" color="#2E7D32">Password Generator <LockIcon /> </Typography>

      {/* Slider for password length */}
      <LengthSlider
        onSliderChange={handleSliderChange}
        value={sliderValue}
      />

      {/* Checkboxes for excluding numbers and special characters */}
      <Checkboxes
        onExcludeNumbersChange={handleNumberChange}
        onExcludeSpecialCharsChange={handleSpecialChars}
      />

      {/* Generate button */}
      <Generate onGenerateClick={handleClick} />

      {/* Render generated passwords */}
      {resultData &&
        resultData.map(function (result, index) {
          return (
            <Card variant="outlined" color="success" className="card" key={index}>
              <CardContent className="cardContent">
                <Typography variant="h6" component="div">
                  {result}
                </Typography>
              </CardContent>
              {/* Copy button */}
              <Button onClick={() => {
                navigator.clipboard.writeText(result);
              }}>
                <ContentCopyIcon color="success" />
              </Button>
            </Card>
          );
        })}
    </div>
  );
}

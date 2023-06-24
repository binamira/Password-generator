import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkboxes(props) {


  return(
    <FormGroup className="checkbox">
    <FormControlLabel className="label"  onChange={props.onExcludeNumbersChange} control={<Checkbox color="success" />} label="Exclude Numbers" />
    <FormControlLabel className="label" onChange={props.onExcludeSpecialCharsChange} control={<Checkbox color="success" />} label="Exclude Special Characters" />
    </FormGroup>
  );
  
}
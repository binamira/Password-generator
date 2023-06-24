
import Button from '@mui/material/Button';

export default function Generate(props) {

  return(
    <div className="button">
    <Button onClick={props.onGenerateClick} color="success"  variant="contained">Generate Password</Button>
    </div>
  );
  
}
import { Alert, AlertTitle } from '@mui/material';
import './styles.scss';

interface MessageProps {
  message: string;
}

function Message(props: MessageProps) {
  const { message } = props;
  return (
    <Alert
      severity="info"
      sx={{
        background: 'white', my: '1rem', border: '1px solid white', borderRadius: '10px', boxShadow: '5px 5px 5px #ecf0f1',
      }}
    >
      <AlertTitle>Info</AlertTitle>
      {message}
    </Alert>

  );
}

export default Message;
